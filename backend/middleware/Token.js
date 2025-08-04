const jwt = require('jsonwebtoken')

const AuthToken = async (req,res,next)=>{
    const token = req.header('token');
    if(! token) return res.status(401).json({message:"No token , authorization denied"});
    try{
        const decode = await jwt.verify(token,process.env.JWT_SECRET);
        req.user = decode.userId;
        next();
    }catch(err){
        console.log("Token is not valid - ",err);
        res.status(404).json({message:"Token is not valid - expired "})
    }
}

module.exports = AuthToken;