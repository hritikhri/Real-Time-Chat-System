const express = require("express");
const app = express();
require("dotenv").config();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const path = require("path");
const ChatingSocket = require('./sockets/ChatingSocket')

// Middlewares
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Chatting server
const server = http.createServer(app);
ChatingSocket(server);

const connectDB = require("./db/Database");
const UserAuth = require("./routes/AuthRoutes");
const AuthToken = require("./middleware/Token");
const ProfileRoutes = require("./routes/ProfileRoutes");
const MessageRoutes = require("./routes/MessageRoutes");
const UpdateRoutes = require("./routes/UpdateRoutes");


app.use("/auth",UserAuth);
app.use("/",AuthToken, ProfileRoutes);
app.use("/",AuthToken, MessageRoutes);
app.use("/update",AuthToken,UpdateRoutes)

// listing the website
server.listen(process.env.Port, () => {
  connectDB();
  console.log(`Server is listening on port ${process.env.Port}`);
});
