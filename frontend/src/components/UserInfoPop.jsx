import React from "react";

const UserInfoPop = ({ selectdUser, UserPopupClose, defaultDp }) => {
  if (!selectdUser) return;
  return (
    <>
      <div className="UserinfoPop">
        <div className="UserInfoPopCon">
          {/* <button className="CloseBtn-popup" onClick={() => UserPopupClose(null)}>X</button> */}
          <div className="userDp">
            <img
              src={
                selectdUser.profilePic
                  ? `http://localhost:3000/uploads/${selectdUser.profilePic}`
                  : defaultDp
              }
              alt=""
            />
          </div>
          <h1>
            <span>{selectdUser.name}</span>
          </h1>
          <p> Bio :{" "}
            <span>{selectdUser.bio}</span>
          </p>
          <p> Email :{" "}
            <span>{selectdUser.email}</span>
          </p>
          
        </div>
      </div>
    </>
  );
};

export default UserInfoPop;
