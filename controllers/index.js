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
var deletePost=require('./deletePosts');
var createComment=require('./createComment');
var getComments=require('./getComments');
var editProfile=require('./editProfile');

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
    auth,
    deletePost,
    createComment,
    getComments,
    editProfile};
