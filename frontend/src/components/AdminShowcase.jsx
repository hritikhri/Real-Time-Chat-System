import React from "react";
import { useNavigate } from "react-router-dom";

const AdminShowcase = ({ adminData, editMode, defaultDp ,afterEditing}) => {
  const Navigate = useNavigate();
  if(afterEditing) adminData = afterEditing;
  return (
    <>
      <div className="AdmininfoCon">
        <div className="allAdminDetails">
          <div className="AdminUpperSec">
            <div className="AdminPic">
              <img
                src={
                  adminData.profilePic
                    ? `http://localhost:3000/uploads/${adminData.profilePic}`
                    : defaultDp
                }
                style={{ height: "100%", width: "100%" }}
                alt="Profile"
              />
            </div>
            <div className="AdminName">
              <h2>{adminData.name}</h2>
            </div>
          </div>
          <div className="AdminMidSec">
            <div className="adminBio">
              <h2>Bio :</h2>
              <p style={{ paddingLeft: "14px" }}>
                {adminData.bio
                  ? adminData.bio
                  : "Hey i am using the chating system."}
              </p>
            </div>
            <div className="adminGmail">
              <h2>Email :</h2> <p>{adminData.email}</p>
            </div>
          </div>
          <div className="AdminLoverSec">
            <div className="logout-btn">
              <button onClick={() => Navigate("/login")}>Logout</button>
            </div>
            <div className="editBtn">
              <button onClick={(e) => editMode(true)}>Edit profile</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminShowcase;
