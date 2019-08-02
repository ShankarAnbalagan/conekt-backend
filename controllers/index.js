var registerUser = require('./registerUser');
var accountVerification=require('./accountVerification');
var loginUser=require('./loginUser');
var forgotPassword=require('./forgotPassword');
var resetPassword=require('./resetPassword');
var logoutUser = require('./logoutUser');
var setNewPassword=require('./setNewPassword');

module.exports={registerUser,
    accountVerification,
    loginUser,
    forgotPassword,
    resetPassword,
    logoutUser,
    setNewPassword};
