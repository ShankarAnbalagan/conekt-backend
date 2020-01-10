var userData=require('./../models/UserData');
var postData=require('./../models/Posts');
var jwt=require('jsonwebtoken');

module.exports=function(req,res,next){
    jwt.verify(req.body.usertoken,process.env.JWT_SECRET,
    function(err,token){
        if(err) console.log(err);
        else{
                userData.findOne({_id:token.id},function(err,user){
                    if(err) console.log(err);
                    if(!user){
                        return res.status(422).json({"message":"User does not exist","data":{}});
                    }
                    postData.find({opID:token.id},function (err, posts) {
                        if(err) console.log(err);
                        return res.status(200).json({
                            "message":"User profile retrieved successfully",
                            "data":{
                                userName:user.userName,
                                profilePic:user.profile.profilePic,
                                bio:user.profile.bio,
                                branch:user.profile.branch,
                                posts:posts
                            }
        
                        })
                    });

                    
            })
        }   
       
    }
    );
}