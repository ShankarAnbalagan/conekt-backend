var jwt=require('jsonwebtoken');
var userData=require('./../models/UserData');

module.exports=function(){
    
    return function(req,res,next){
        if(req.body.usertoken){
            console.log(req.body.usertoken);
            jwt.verify(req.body.usertoken,process.env.JWT_SECRET,
                function(err,user){
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
}
