import React, { useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";

const socket = io(`${import.meta.env.VITE_BACKEND}`);

const MessageInput = ({ selectdUser, currentUser ,useAdminpanel}) => {
  if(useAdminpanel) return;
  const [message, setMessage] = useState("");
  if(!selectdUser) return;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || !selectdUser || !currentUser) return;

    const data = {
      receiverId: selectdUser._id,
      message,
    };

    const config = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };

    try {
      // Save messages in DB
      // await axios.post(`${import.meta.env.VITE_BACKEND}/messages`, data, config);

      socket.emit("sendMessage", {
        senderId: currentUser._id,
        receiverId: selectdUser._id,
        message,
      });
      setMessage("");
    } catch (err) {
      console.log("Error sending message:", err);
    }
  };

  return (
    <div className="MessageInputCon">
      <div className="inputbox">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter messages..."
            autoFocus
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default MessageInput;
