const Posts = require('./../models/Posts');
const UserData = require('./../models/UserData');
const jwt = require('jsonwebtoken');

module.exports=function(req,res,next){
    var token=req.body.usertoken;
    jwt.verify(token,process.env.JWT_SECRET,
        function(err,verifiedToken){
            if(err) console.log("Verification error---->",err);
            else{
                var userId=verifiedToken.id;

                UserData.findOne({_id:userId},function(err,user){
                    if(err)console.log(err);
                    else{
                        Posts.create({opID:userId,
                            opName:user.userName,
                            postCategory:req.body.postCategory,
                            parentPost:"comment",
                            parentPostId:req.body.parentPostId,
                            text:req.body.text,
                            timeCreated:Date.now(),
                            displayTime:Date()
                        },function(err,data){
                            if(err) console.log("Create post error----->",err);
                            else{
                                res.status(200).json({"message":"Post successfully created","data":{}});
                            }
                        });
                    }
                });


            }
        });
}