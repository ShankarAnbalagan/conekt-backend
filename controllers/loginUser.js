var userData=require('../models/UserData');
var jwt=require('jsonwebtoken');


module.exports=function(req,res,next){
    var {userId,password}=req.body;
    userData.findOne({$or:[{userName:userId},{email:userId}],
    },function(err,user){
        if(err)console.log("Login error----------->",err);

        if(!user){
            return res.status(422).json({"message":"User does not exist","data":{}});
        }

        if(!user.isVerified) return res.status(422).json({"message":"User is not verified","data":{}});

        user.comparePassword(password,function(err,isMatch){
            if(err)console.log("Login error----------->",err);

            if(isMatch){

                userData.updateOne({
                    _id:user._id},{$set:{
                        isLoggedIn:true
                    }},function(err,data){
                        if(err) console.log(err);
                        return (  
                            res.status(200).json({
                            "message":"User Login Succesful",
                            "data":{
                                userName:user.userName,
                                email:user.email,
                                userToken:jwt.sign({
                                    id:user._id
                                },process.env.JWT_SECRET)
                            }
                        }));
                    });
            }
            else return res.status(422).json({"message":"Email/UserName or Password Incorrect","data":{}});
        });


    });
}