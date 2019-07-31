var userData=require('./../models/UserData');

module.exports= function(req,res,next){
    userData.updateOne({
        verificationToken:req.params.code
    },{
        set:{
            isVerified:true
        },
        unset:{
            verificationToken:''
        }
    },function(err,result){
        if(err) return res.status(200).json({"message":"Something went wrong","data":{}})

        if(!user) return res.status(422).json({"message":"Link Invalid or Expired","data":{}})

        res.status(200).json({"message":"Account Verified Successfully","data":""})
    });


}