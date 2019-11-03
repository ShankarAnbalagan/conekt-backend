var registerUser = require('./registerUser');
var accountVerification=require('./accountVerification');
var loginUser=require('./loginUser');
var forgotPassword=require('./forgotPassword');
var resetPassword=require('./resetPassword');
var logoutUser = require('./logoutUser');
var getProfile=require('./getProfile');
var setNewPassword=require('./setNewPassword');
var createPost = require('./createPost');
var getPosts=require('./getPosts');
var auth=require('./auth')

module.exports={registerUser,
    accountVerification,
    loginUser,
    forgotPassword,
    resetPassword,
    logoutUser,
    getProfile,
    setNewPassword,
    createPost,
    getPosts,
    auth};
