var UserData = require('./../models/UserData');
var randomString = require('randomstring');
module.exports = function(req,res,next){

    req.body.verificationToken=randomString.generate();

    UserData.create(req.body,function(err,data){
        if(err) res.status(200).json({"message": "Something went wrong", "data":{}});
        else res.status(200).json({"message": "User Successfully added", "data":{}});
    });
}