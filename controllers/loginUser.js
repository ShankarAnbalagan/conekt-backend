var userData=require('../models/UserData');
var jwt=require('jsonwebtoken');


module.exports=function(req,res,next){
    var {email,password}=req.body;
    userData.findOne({
        email,
        isVerified:true
    },function(err,user){
        if(err) return res.status(200).json({"message":"something went wrong","data":""});

        if(!user){

        }

        user.comparePassword(password,function(err,isMatch){
            if(err) return res.status(200).json({"message":"something went wrong","data":""});

            if(isMatch){
                return res.status(200).json({
                    "message":"Account Login Succesful",
                    "data":{
                        userName:user.userName,
                        email:user.email,
                        token:jwt.sign({
                            id:user._id
                        },process.env.JWT_SECRET)
                    }
                });
            }

            return res.status(200).json({"message":"Email or Password Incorrect","data":""});
        });


    });
}