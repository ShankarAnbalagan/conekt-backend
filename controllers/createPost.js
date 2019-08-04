const Posts = require('./../models/Posts');
const jwt = require('jsonwebtoken');

module.exports=function(req,res,next){
    var token=req.headers.usertoken;
    jwt.verify(token,process.env.JWT_SECRET,
        function(err,verifiedToken){
            if(err) console.log("Verification error---->",err);
            else{
                var userId=verifiedToken.id;
                Posts.create({opID:userId,
                    postCategory:req.body.postCategory,
                    parentPost:req.body.parentPost,
                    text:req.body.text,
                    timeCreated:Date.now()
                },function(err,data){
                    if(err) console.log("Create post error----->",err);
                    else{
                        res.status(200).json({"message":"Post successfully created","data":{}});
                    }
                });
            }
        });
}