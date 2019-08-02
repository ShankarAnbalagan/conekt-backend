var jwt=require('jsonwebtoken');
var userData=require('./../models/UserData');
var dotenv=require('dotenv');

dotenv.config();

module.exports=function(req,res,next){

    if(req.headers.usertoken){
        
        jwt.verify(req.headers.usertoken,process.env.JWT_SECRET,
            function(err,data){
                if(err) console.log(err);
                else{
    
                    userData.findById(user.id,function(err,user){
                        if(err) console.log(err);
        
                        if(!user.isLoggedIn){
                            return res.status(422).json({"message":"User not logged in or token expired","data":{}});
                        }
                        else{
                            next();
                        }   
                        
                    });
                }           
    
    
            });
    }

    else{
        return res.status(422).json({"message":"Invalid Token","data":{}});
    }
}