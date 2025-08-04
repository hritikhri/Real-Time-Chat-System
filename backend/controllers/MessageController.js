const Messages = require("../models/Messages");

const getAllMessages = async (req, res) => {
  const currentUserId = req.user;
  const otherUserId = req.params.id;
  try {
    const messages = await Messages.find({
      $or: [
        { senderId: currentUserId, receiverId: otherUserId },
        { senderId: otherUserId, receiverId: currentUserId },
      ],
    }).sort({ createdAt: 1 });

    res.status(200).json(messages);
  } catch (err) {
    console.error("Error fetching messages:", err);
    res.status(500).json({ error: "Server error while fetching messages" });
  }
};

const sendMessages = async (req, res) => {
  const { receiverId, message } = req.body;
  try {
    const newMessage = new Messages({
      senderId: req.user,
      receiverId: receiverId,
      message: message,
    });
    await newMessage.save();
    res.json(newMessage);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getAllMessages, sendMessages };
