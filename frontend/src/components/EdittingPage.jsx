import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";

const EdittingPage = ({
  adminData,
  UpdatedUser,
  affterUpdate,
  editMode,
  defaultDp,
}) => {
  const fileInputRef = useRef(null);
  const profileDPRef = useRef(null);
  const [profileDP, setprofiledP] = useState(null);
  const [DPpreview, setDPpreview] = useState(null);
  const [form, setForm] = useState({
    name: adminData.name,
    email: adminData.email,
    bio: adminData.bio,
    profilePic: adminData.profilePic,
  });

  async function handleSubmit() {
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("bio", form.bio);
    if (profileDP) formData.append("profilePic", profileDP);

    const config = {
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND}/update`,
        formData,
        config
      );
      affterUpdate(res.data);
      setDPpreview(null)
      editMode(null);
    } catch (err) {
      console.log(err);
    }
  }

  const handleDPClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const fileData = e.target.files[0];
    setForm({ ...form, profilePic: fileData });
    setprofiledP(fileData);
    const imgUrl = URL.createObjectURL(fileData);
    setDPpreview(imgUrl);
  };

  return (
    <>
      <div className="EdittingPageCon">
        <div className="AdmininfoCon">
          <div className="allAdminDetails">
            <div className="AdminUpperSec">
              <div className="AdminPic" id="profileDP" onClick={handleDPClick}>
                {DPpreview ? (
                  <img
                    src={DPpreview}
                    alt="Profile"
                    style={{ height: "100%", width: "100%" }}
                  />
                ) : (
                  <img
                    src={
                      adminData.profilePic
                        ? `http://localhost:3000/uploads/${adminData.profilePic}`
                        : defaultDp
                    }
                    alt="Profile"
                    style={{ height: "100%", width: "100%" }}
                  />
                )}
              </div>
              <input
                type="file"
                id="fileInput"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <div className="AdminName">
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
            </div>
            <div className="AdminMidSec">
              <div className="adminBio">
                <h2>Bio :</h2>
                <textarea
                  value={form.bio}
                  onChange={(e) => setForm({ ...form, bio: e.target.value })}
                  cols="30"
                  rows="5"
                  style={{ paddingLeft: "14px", marginLeft:"13px"}}
                ></textarea>
              </div>
              <div className="adminGmail">
                <h2>Email :</h2>{" "}
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div className="AdminLoverSec">
              <div className="saveBtn">
                <button onClick={handleSubmit}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EdittingPage;
