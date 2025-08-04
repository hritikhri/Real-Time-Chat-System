const User = require("../models/User");

const uploadPic = async (req, res) => {
  const profilePic = req.file;
  const { name, email, bio } = req.body;

  if (!req.user) return res.json({ message: "user is not valid" });
  try {
    const userData = await User.findById(req.user);
    if (name) userData.name = name;
    if (bio) userData.bio = bio;
    if (email) userData.email = email;
    if (profilePic) userData.profilePic = req.file.filename;

    await userData.save();
    return res.json({
      _id: userData._id,
      name: userData.name,
      email: userData.email,
      bio: userData.bio,
      profilePic: userData.profilePic,
      message: "Updated...",
    });
  } catch (err) {
    console.log("error in server ", err);
    res.json({ message: "server Error" });
  }
};
const updatePic = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.json({ message: "server Error" });
  }
};
const deletePic = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.json({ message: "server Error" });
  }
};
module.exports = { uploadPic, updatePic, deletePic };
