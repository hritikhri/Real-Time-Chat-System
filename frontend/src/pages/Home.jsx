import React, { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import axios from "axios";
import MessageInput from "../components/MessageInput";
import AdminPanel from "../components/AdminPanel";
import FriendList from "../components/FriendList";
import FriendInfo from "../components/FriendInfo";
import Messages from "../components/Messages";

const Home = () => {
  const navigate = useNavigate();
  const [defaultPic, setdefaultPic] = useState(
    "http://localhost:3000/uploads/1122.png"
  );
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
    profilePic: "",
    userList: [],
  });
  const [UpdatedUser, setUpdated] = useState(null);
  const [selectUser, setSelectUser] = useState(null);
  const [userPanel, setUserPanel] = useState(null);
  const [userPopup, setUserpopUp] = useState(null);
  const [searchedUser, setSearchedUser] = useState(null);
  const [search, setSearch] = useState("");
  const [mainDP, setMainDp] = useState({
    default: "http://localhost:3000/uploads/1122.png",
    edited: ` `,
  });

  useEffect(() => {
    async function searchUser() {
      const config = {
        headers: {
          token: localStorage.getItem("token"),
        },
      };
      if (search) {
        try {
          const res = await axios.get(
            `${import.meta.env.VITE_BACKEND}/search?query=${search}`,
            config
          );
          setSearchedUser(res.data);
          // console.log(searchedUser)
        } catch (err) {
          console.log(err);
        }
      } else {
        setSearchedUser([]);
      }
    }
    searchUser();
  }, [search]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const config = {
          headers: {
            token: localStorage.getItem("token"),
          },
        };
        const [profileRes, friendListRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_BACKEND}/profile`, config),
          axios.get(`${import.meta.env.VITE_BACKEND}/friendlist`, config),
        ]);
        setProfile({
          _id: profileRes.data._id,
          name: profileRes.data.name,
          email: profileRes.data.email,
          bio: profileRes.data.bio,
          profilePic: profileRes.data.profilePic,
          userList: friendListRes.data.UserList || [],
        });
        setMainDp({
          edited: `http://localhost:3000/uploads/${profileRes.data.profilePic}`,
        });
      } catch (err) {
        console.log(err);
        localStorage.getItem("token");
        navigate("/login");
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="Homecontainer">
      <div className="leftSection" onClick={() => setUserpopUp(null)}>
        <div className="chat-h2">
          {/* <div className="homeLogo"></div> */}
          <h2>Chats</h2>
        </div>
        <div className="SearchBox">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
          <div className="searchIcon">
            <div className="icon"></div>
          </div>
        </div>
        <div className="inboxs">
          <FriendList
            resetSearch={(data) => setSearch("")}
            searchUser={searchedUser}
            UserPopup={(data) => setUserpopUp("data")}
            defaultDp={defaultPic}
            userList={profile.userList}
            onSelectUser={(user) => {
              setSelectUser(user), setUserPanel(null);
            }}
            useAdminpanel={userPanel}
          />
        </div>
        <div className="adminPanal">
          <AdminPanel
            defaultDp={defaultPic}
            currentUser={profile}
            panelStatus={(user) => {
              setUserPanel(user);
            }}
            afterUpdate={UpdatedUser}
          />
        </div>
      </div>
      <div className="rightSection">
        <div className="userInfo">
          <FriendInfo
            UserPopup={(data) => setUserpopUp(data)}
            SavedPopData={userPopup}
            defaultDp={defaultPic}
            user={selectUser}
            useAdminpanel={userPanel}
          />
        </div>
        <div className="UserChats">
          <Messages
            UserPopup={userPopup}
            defaultDp={defaultPic}
            selectdUser={selectUser}
            currentUser={profile}
            useAdminpanel={userPanel}
            UpdatedUser={profile}
            afterEditing={UpdatedUser}
            UserPopupClose={(data) => setUserpopUp(data)}
            affterUpdate={(data) => {
              setUpdated(data);
            }}
          />
        </div>
        <div className="messageInput" onClick={(e) => setUserpopUp(null)}>
          <MessageInput
            selectdUser={selectUser}
            currentUser={profile}
            useAdminpanel={userPanel}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
