const User = require("../models/User");

const uploadPic = async (req, res) => {
  const { name, email, bio } = req.body;

  if (!req.user) {
    return res.json({ message: "User is not valid" });
  }

  try {
    const userData = await User.findById(req.user);

    if (name) userData.name = name;
    if (email) userData.email = email;
    if (bio) userData.bio = bio;

    // User uploaded a new image
    if (req.profilePicUrl) {

      // Delete old image from Cloudinary
      if (userData.profilePicPublicId) {
        await cloudinary.uploader.destroy(
          userData.profilePicPublicId
        );
      }

      // Save new image details
      userData.profilePic = req.profilePicUrl;
      userData.profilePicPublicId = req.public_id;
    }

    await userData.save();

    return res.json({
      _id: userData._id,
      name: userData.name,
      email: userData.email,
      bio: userData.bio,
      profilePic: userData.profilePic,
      message: "Updated Successfully",
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server Error"
    });
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
