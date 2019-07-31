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
              return res.status(200).json({
                message: "User Name or Email Already Taken",
                data: {}
              });
            }
            else{
                req.body.verificationToken=randomString.generate();

                UserData.create(req.body,function(err,data){
                    if(err) res.status(200).json({"message": "Something went wrong", "data":{}});
                    else 
                    {
                        res.status(200).json({"message": "User Successfully added", "data":{}});
                        sendMail(req.body.verificationToken,req.body.email);
                    }
                });
            }
        });   

}