var registerUser = require('./registerUser');
var accountVerification=require('./accountVerification');
var loginUser=require('./loginUser');
var forgotPassword=require('./forgotPassword');
var resetPassword=require('./resetPassword');

module.exports={registerUser,
    accountVerification,
    loginUser,
    forgotPassword,
    resetPassword};
