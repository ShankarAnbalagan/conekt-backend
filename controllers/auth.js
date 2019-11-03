var User=require('./../models/UserData');
var jwt=require('jsonwebtoken');

module.exports=function(req,res,next){
    var token=req.params.token;

    jwt.verify(token,process.env.JWT_SECRET,
        function(err,data){
            if(err){
                console.log("Auth error---->",err);
            }
            else{
                User.findById(data.id,function(err,docs){
                    if(err){ 
                        console.log("Auth find error--->",err);
                        return res.status(422).json({"message":"User does not exist or Token invalid","data":{}});
                    }
                    else{
                        //console.log(docs);
                        return res.status(200).json({"message":"User data returned successfully",
                        "data":{"userName":docs.userName,
                                "email":docs.email,
                                "profile":docs.profile}});
                    }
                });
            }
        }
        )
}