var userData = require('./../models/UserData');

module.exports = function (req, res, next) {
    console.log(req.query.code);
    var code = req.query.code;


    userData.updateOne({
        verificationToken: code
    }, {
            $set: {
                isVerified: true
            },
            $unset: {
                verificationToken: ''
            }
        }, function (err, user) {
            if (err) console.log("Verification error----------->",err);;

            if (!user.nModified) return res.status(422).json({ "message": "Link Invalid or Expired", "data": {} });

            res.status(200).json({ "message": "Account Verified Successfully", "data": {} })
        });



}