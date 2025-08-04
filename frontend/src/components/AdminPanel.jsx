import React from "react";

const AdminPanel = ({ currentUser, panelStatus, afterUpdate, defaultDp }) => {
  if (afterUpdate) currentUser = afterUpdate;
  return (
    <>
      <div
        className="AdminPanelCon"
        onClick={() => {
          panelStatus(currentUser);
        }}
      >
        <div className="admin-Dp">
          <img
            src={
              currentUser.profilePic
                ? `http://localhost:3000/uploads/${currentUser.profilePic}`
                : defaultDp
            }
            alt="Profile"
          />
        </div>
        <div className="admin-name">
          <h2>{currentUser.name}</h2>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
