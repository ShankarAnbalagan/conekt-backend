var users=require('./../models/UserData');
var jwt=require('jsonwebtoken');

module.exports=function(req,res,next){
    jwt.verify(req.body.usertoken,process.env.JWT_SECRET, function (err, token) {
        if(err) console.log("err-->"+err);
        else{
            users.updateOne({_id:token.id},{userName:req.body.newUserName, 'profile.bio':req.body.newBio},
            function(err,data){
                if(err) console.log("err-->"+err);
                {
                    res.status(200).json({"message":"User profile edited successfully"});
                }
            });
        }
    });
}