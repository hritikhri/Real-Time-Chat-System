import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import Admininfo from "./Admininfo";
import UserInfoPop from "./UserInfoPop";
import DefaultMessbox from "./DefaultMessbox";

const socket = io(`${import.meta.env.VITE_BACKEND}`);

const Messages = ({
  selectdUser,
  currentUser,
  UserPopupClose,
  useAdminpanel,
  UpdatedUser,
  affterUpdate,
  UserPopup,
  defaultDp,
  afterEditing,
}) => {
  const FixedBox = document.getElementById("fixedPop");

  if (!selectdUser && !UserPopup && !useAdminpanel) return <DefaultMessbox />;
  if (useAdminpanel)
    return (
      <Admininfo
        afterEditing={afterEditing}
        defaultDp={defaultDp}
        adminData={useAdminpanel}
        UpdatedUser={UpdatedUser}
        affterUpdate={affterUpdate}
      />
    );
  if (UserPopup) FixedBox.style.visibility = "visible";

  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();

  // Join socket room and fetch messages
  useEffect(() => {
    if (!selectdUser || !currentUser) return;

    socket.emit("join", {
      userid: currentUser._id,
      name: currentUser.name,
    });

    const fetchMessages = async () => {
      try {
        const config = {
          headers: {
            token: localStorage.getItem("token"),
          },
        };
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND}/messages/${selectdUser._id}`,
          config
        );
        setMessages(res.data);
        // console.log(res.data)
      } catch (err) {
        console.log("Error fetching messages:", err);
      }
    };

    fetchMessages();
  }, [selectdUser, currentUser]);

  // Listen for incoming messages
  useEffect(() => {
    const receiveHandler = (msg) => {
      const senderMatch = msg.senderId === selectdUser?._id;
      const receiverMatch = msg.receiverId === selectdUser?._id;
      const isMine = msg.senderId === currentUser?._id;

      if ((senderMatch || receiverMatch) && (isMine || senderMatch)) {
        setMessages((prev) => [...prev, msg]);
      }
    };

    socket.on("reciveMessage", receiveHandler);

    return () => socket.off("reciveMessage", receiveHandler);
  }, [selectdUser, currentUser]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="MessagesCon">
      <div className="fixedPop" id="fixedPop">
        {UserPopup ? (
          <UserInfoPop
            defaultDp={defaultDp}
            UserPopupClose={UserPopupClose}
            selectdUser={selectdUser}
          />
        ) : (
          ""
        )}
      </div>
      <div className="messagesData" onClick={() => UserPopupClose(null)}>
          {/* <div className="messDay">
          <p>Today</p>
        </div> */}
        {messages && messages.length > 0 ? (
          messages.map((mess) => (
            <>
              <div key={mess._id} ref={scrollRef}>
                {mess.senderId === currentUser?._id ? (
                  <div className="sender-mess">
                    <p>{mess.message}</p>
                    <div>{mess.time}</div>
                  </div>
                ) : (
                  <div className="receiver-mess">
                    <p>{mess.message}</p>
                    <div>{mess.time}</div>
                  </div>
                )}
              </div>
            </>
          ))
        ) : (
          <div className="noMessages">
            <h1>You can message me if you want!!</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;