import React from "react";

const FriendInfo = ({ user, useAdminpanel ,defaultDp ,UserPopup,SavedPopData}) => {
  if (useAdminpanel) return;
  if (!user) return;
  function editPopup (){
    if(UserPopup) UserPopup(true);
    if(SavedPopData) UserPopup(null);
  }
  function closePopup (){
    if(SavedPopData) UserPopup(null)
  }
  return (
    <>
      <div className="FriendInfoCon" onClick={closePopup}>
        <div className="Friend-info-Con" onClick={editPopup}> 
          <div className="Friend-info-Dp">
            <img
              src={
                user.profilePic
                  ? `http://localhost:3000/uploads/${user.profilePic}`
                  : defaultDp
              }
              style={{ height: "40px", width: "40px" }}
              alt="user Dp"
            />
          </div>
          <div className="Friend-info-name">
            <h3>{user.name}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendInfo;
