const UserData = require('./../models/UserData');
const randomstring = require('randomstring');
const {sendMail}=require('./../utils/index');

module.exports = function(req,res,next){
    var email=req.body.email;
    UserData.findOne({email},function(err,user){
        if(err) console.log(err);
        else{
            if(!user){
                res.status(422).json({message:"User does not exist",data:{}});
            }
            else{
                if(user.passwordResetToken){

                    var[,timestamp]=user.passwordResetToken.split('.');

                    if((Date.now()-timestamp*1)>(60*60*1000)){
                                    UserData.updateOne({email},{$unset:{passwordResetToken:''}},function(err,user){
                                        if(err) console.log(err);
                                        else{
                                            var resetToken=randomstring.generate()+"."+Date.now();
                                UserData.updateOne({email},
                                    {$set:{
                                        passwordResetToken:resetToken
                                    }
                                },function(err,data){
                                    if(err) console.log(err);
                                    else{
                                        sendMail.passwordReset(resetToken,email);
                                        return res.status(200).json({message:"Password reset link sent",data:{}});                            
                                    }
                                });
                            }

                        })
                        
                    }else return res.status(200).json({message:"Password token already sent",data:{}});
                }
                else{
                    var resetToken=randomstring.generate()+"."+Date.now();
                    UserData.updateOne({email},
                        {$set:{
                            passwordResetToken:resetToken
                        }
                    },function(err,data){
                        if(err) console.log(err);
                        else{
                            sendMail.passwordReset(resetToken,email);
                            return res.status(200).json({message:"Password reset link sent",data:{}});                            
                        }
                    });
                }
            }
        }
    })
};