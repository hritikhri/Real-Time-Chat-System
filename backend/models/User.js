const mongoose = require('mongoose')

const Userschema = new mongoose.Schema ({
    name : {type : String, require:true},
    email:{type:String, require:true,lowercase:true,},
    password:{type:String, require:true},
    profilePic:{type:String,default:"https://res.cloudinary.com/dxp5vte7o/image/upload/v1767437280/samples/people/boy-snow-hoodie.jpg"},
    profilePicPublicId: String,
    bio:{type:String,default:"hey i am using the hritiks'thing ..."},
    otp:{type:Number},
    token:{type:String},
    createdAt:{type:Date, default:Date.now()}
});

module.exports = mongoose.model("User",Userschema);
 