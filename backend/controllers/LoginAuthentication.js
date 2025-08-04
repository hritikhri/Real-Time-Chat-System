const loginauthentication = async (req,res)=>{
    try{
        res.status(202).json({message : `all ok `})
    }catch(err){
        console.log(err)
        res.status(500).json({message:"Server Error"})
    }
}
module.exports = {loginauthentication}