var registerUser = require('./registerUser');
var accountVerification=require('./accountVerification');
var loginUser=require('./loginUser');
var forgotPassword=require('./forgotPassword');
var resetPassword=require('./resetPassword');
var logoutUser = require('./logoutUser');
var profile=require('./profile');
var setNewPassword=require('./setNewPassword');
var createPost = require('./createPost');

module.exports={registerUser,
    accountVerification,
    loginUser,
    forgotPassword,
    resetPassword,
    logoutUser,
    profile,
    setNewPassword,
    createPost};
