var UserData = require('./../models/UserData');
var randomString = require('randomstring');
var {sendMail} = require('./../utils/index');
module.exports = function(req,res,next){

    var { userName, email } = req.body;

    UserData.findOne({        
            $or: [
                { userName }, { email }
            ]
        },
        function (err, user) {
            if (err) return next(err);
      
            if (user) {
              return res.status(422).json({
                message: "User Name or Email Already Taken",
                data: {}
              });
            }
            else{
                req.body.verificationToken=randomString.generate();
                req.body['profile.branch']=req.body.branch;
                UserData.create(req.body,function(err,data){
                    if(err) console.log("Registration error----------->",err);
                    else 
                    {
                        res.status(200).json({"message": "User successfully added", "data":{}});
                        sendMail.verification(req.body.verificationToken,req.body.email);
                    }
                });
            }
        });   

}