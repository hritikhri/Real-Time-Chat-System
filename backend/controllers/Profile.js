const User = require("../models/User");
const Message = require("../models/Messages")

const GetProfile = async (req, res) => {
  const userId = req.user; 

  try {
    const newUser = await User.findById(userId); 
    if (!newUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      bio:newUser.bio,
      profilePic : newUser.profilePic,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const FriendList = async (req, res) => {
  const Userid = req.user;
  // const recentList = await Message.aggregate([{
  //   $match:{
  //     $or:[
  //       {
  //         receiverId:Userid,
  //         senderId:Userid,
  //       }
  //     ]
  //   }
  // },{
  //   $sort:{timestamp:-1}
  // },
  // {
  //   $group:{
  //     _id:{
  //       $cond:[
  //         {$eq:["$senderId",Userid]},"$receiverId","$senderId"
  //       ]
  //     },
  //     lastMess:{$first:"$$ROOT"}
  //   }
  // },
  // {
  //   $lookup:{
  //     from:
  //   }
  // }
  // ])  
  try {
    const currentUser =await User.findById(req.user);
    const RealUserList = await User.find({_id:{$ne:currentUser._id}});
    
    const UserList = RealUserList;
    res.json({ UserList });
  } catch (err) {
    console.log(err);
  }
};
const searchUser = async function (req,res) {
  const {query} = req.query;
  try{
    const userData = await await User.find({name: { $regex: query, $options: 'i' } })
    res.json(userData)

  }catch(err){
    console.log(err)
  }
}
module.exports = {
  GetProfile,
  FriendList,
  searchUser,
};
