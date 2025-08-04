import React, { useState } from "react";

const FriendList = ({ userList,resetSearch, onSelectUser, defaultDp, UserPopup ,searchUser}) => {
  if(searchUser){
  if(searchUser.length>0) userList = searchUser}
  // console.log(userList)
  return (
    <>
      <div className="FriendListCon">
        {userList.map((user) => (
          <div
            className="FriendCon"
            key={user._id}
            onClick={() => {
              onSelectUser(user), UserPopup(null),
              resetSearch(true)
            }}
          >
            <div className="Friend-Dp">
              <img
                src={
                  user.profilePic
                    ? `http://localhost:3000/uploads/${user.profilePic}`
                    : defaultDp
                }
                style={{ height: "35px", width: "35px" }}
                alt="user Dp"
              />
            </div>
            <div className="Friend-name">
              <h3>{user.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FriendList;
