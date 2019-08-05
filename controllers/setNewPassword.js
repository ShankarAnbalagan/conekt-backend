var UserData=require('./../models/UserData');
var bcrypt=require('bcrypt');

module.exports=function(req,res,next){
    var [token,timestamp]=(req.params.code).split('.');
    var password=req.body.password;


    if((Date.now()-timestamp*1)>(60*60*1000)){
        return res.render('resetConfirm',{message:"Token expired"});
    }

    if(password.length<8){
        return res.render('newPasswordError',{code:token});
    }
    else{
        bcrypt.hash(password,10,function(err,hashedPassword){
            if(err) console.log(err);
            else{
                UserData.updateOne({passwordResetToken:req.params.code},{
                    $set:{
                        password:hashedPassword
                    },
                $unset:{
                    passwordResetToken:''
                }},
                function(err,user){
                    if(err) console.log(err);
                    else{
                        if(user.n==0){
                            return res.render('resetConfirm',{message:"Token expired"});
                        }
                        else{
                            return res.render('resetConfirm',{message:"Password reset successfully"});
                        }
                    }
                })
            }
        });



        
    }
}