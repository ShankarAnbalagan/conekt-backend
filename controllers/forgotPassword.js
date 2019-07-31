const UserData = require('./../models/UserData');
const randomstring = require('randomstring');
const bcrypt=require('bcrypt');
const {sendMail}=require('./../utils/index');

module.exports = function(req,res,next){
    var email=req.body.email;
    UserData.findOne({email},function(err,user){
        if(err) console.log(err);
        else{
            if(!user){
                res.status(200).json({message:"User does not exist",data:{}});
            }
            else{
                if(user.passwordResetToken){
                    res.status(200).json({message:"Password token already sent",data:{}});
                }
                else{
                    console.log(user);
                    var resetToken=randomstring.generate()+"."+Date.now();
                    bcrypt.hash(resetToken,5,function(err,hashedToken){
                        if(err) console.log(err);
                        else{
                            UserData.updateOne({email},
                                {$set:{
                                    passwordResetToken:hashedToken
                                }
                            },function(err,data){
                                if(err) console.log(err);
                                else{
                                    res.status(200).json({message:"Password reset link sent",data:{}});
                                    sendMail.passwordReset(hashedToken,email);
                                }
                            });                            
                        }
                    });
                }
            }
        }
    })
};