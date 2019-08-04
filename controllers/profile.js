var userData=require('./../models/UserData');

module.exports=function(req,res,next){
    jwt.verify(req.headers.usertoken,process.env.JWT__SECRET),
    function(err,user){
        if(err) console.log(err);

        if(!user){
            return res.status(422).json({"message":"User does not exist","data":{}});
        }

        res.status(200).json({
            "message":"Profile page opened successfully",
            "data":{
                profilePic:user.profile.profilePic,
                bio:user.profile.bio,
                branch:user.profile.branch
            }
        });

        
    }
}