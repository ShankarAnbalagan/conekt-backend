var UserData=require('./../models/UserData');

module.exports=function(req,res,next){
    var code=req.query.code;
    var [token,timestamp]=code.split('.');


    UserData.findOne({passwordResetToken:code},function(err,user){
        if(err) console.log(err);
        else{
            if(user){
                if((Date.now()-timestamp*1)>(60*60*1000)){
                    return res.render('resetConfirm',{message:"Token expired"});
                }
                else return res.render('reset',{code:code}); 
            }
            else{
                return res.render('resetConfirm',{message:"Token expired"});
            }
        }
    });

}