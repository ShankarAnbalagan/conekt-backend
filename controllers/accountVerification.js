var userData=require('./../models/UserData');

module.exports= function(req,res,next){
    console.log(req.query.code);
    var code=req.query.code;

    userData.findOne({verificationToken:code},function(err,user){
        if(err) return res.status(200).json({"message":"Something went wrong","data":{}});
        if(!user) return res.status(422).json({"message":"Link Invalid or Expired","data":{}});
        else{
            userData.updateOne({
                verificationToken:code
            },{
                $set:{
                    isVerified:true
                },
                $unset:{
                    verificationToken:''
                }
            },function(err,user){
                if(err) return res.status(200).json({"message":"Something went wrong","data":{}});
        
                res.status(200).json({"message":"Account Verified Successfully","data":""})
            });
        }
    });

}