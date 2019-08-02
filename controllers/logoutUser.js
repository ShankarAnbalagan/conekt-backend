const UserData=require('./../models/UserData');
const jwt = require('jsonwebtoken');

module.exports= function(req,res,next){
        jwt.verify(req.headers.usertoken,process.env.JWT_SECRET,
        function(err,data){
            if(err) console.log(err);
            else {
                UserData.updateOne({_id:data.id},{$set:{isLoggedIn:false}},
                    function(err,user){
                        //console.log(user);
                        if(err) console.log("Logout error----->",err);
                        else{
                            if(user.nModified!=0){
                                return res.status(200).json({"message":"User logged out successfully","data":{}});
                            }
                            return res.status(422).json({"message":"User not logged in","data":{}});
                        }
                    });
            }
        });
}