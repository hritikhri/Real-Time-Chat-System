const cors = require("cors");
const { Server } = require("socket.io");

const ChatingSocket = async (server) => {
 const io = new Server(server, {
   cors: {
     origin: "http://localhost:5173",
     methods: ["GET", "POST"],
   },
 });

  const users = new Map();

  io.on("connection", (socket) => {
    console.log("new client Stored - ", socket.id);

    socket.on("join", (userData) => {
      users.set(userData.userid, socket.id);
      console.log(` ${userData.name} ${socket.id} Joined the socket`);
    });

    // user sends a message
    socket.on("sendMessage", async (data) => {
      const { senderId, receiverId, message } = data;
      try {
        const messageModle = require("../models/Messages");
        const newMsg = await messageModle.create({
          senderId,
          receiverId,
          message: message,
          time: new Date().toLocaleTimeString(),
        });

        const senderSocket = users.get(senderId);
        const receiveSocket = users.get(receiverId);
        const savedMess = {
          _id: newMsg._id,
          senderId,
          receiverId,
          message,
          time: newMsg.time,
        };
        if (receiveSocket) {
          io.to(receiveSocket).emit("reciveMessage", savedMess);
        }
        if (senderSocket) {
          io.to(senderSocket).emit("reciveMessage", savedMess);
        }
      } catch (err) {
        console.log("error in saving messages", err);
      }
    });
    socket.on("disconnect", () => {
      console.log("socket Disconnected - ", socket.id);
      for (const [userId, sockId] of users) {
        if (sockId === socket.id) {
          users.delete(userId);
          console.log(`👋 User ${userId} removed`);
          break;
        }
      }
    });
  });
};

module.exports = ChatingSocket;
