var userData=require('../models/UserData');
var jwt=require('jsonwebtoken');


module.exports=function(req,res,next){
    var {userName,email,password}=req.body;
    userData.findOne({$or:[{userName},{email}],
        isVerified:true
    },function(err,user){
        if(err)console.log("Login error----------->",err);

        if(!user){
            return res.status(422).json({"message":"User does not exist","data":{}});

        }

        user.comparePassword(password,function(err,isMatch){
            if(err)console.log("Login error----------->",err);

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

            return res.status(422).json({"message":"Email or Password Incorrect","data":{}});
        });


    });
}