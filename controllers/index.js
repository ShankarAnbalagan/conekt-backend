var registerUser = require('./registerUser');
var accountVerification=require('./accountVerification');
var loginUser=require('./loginUser');
var forgotPassword=require('./forgotPassword');
var resetPassword=require('./resetPassword');
var logoutUser = require('./logoutUser');
var getProfile=require('./getprofile');
var setNewPassword=require('./setNewPassword');
var createPost = require('./createPost');
var getPosts=require('./getPosts');

module.exports={registerUser,
    accountVerification,
    loginUser,
    forgotPassword,
    resetPassword,
    logoutUser,
    getProfile,
    setNewPassword,
    createPost,
    getPosts};
