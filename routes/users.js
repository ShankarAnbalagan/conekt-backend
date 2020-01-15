var express = require('express');
var {registerUser,
    accountVerification,
    loginUser,
    forgotPassword,
    resetPassword,
    logoutUser,
    getProfile,
    setNewPassword,
    auth,
    editProfile}=require('./../controllers/index');
var {validateRequest,validation_rules}=require('./../utils/index');
var  {authenticator}=require('./../middleware/index');
var router = express.Router();

/**
 * @api {post} https://conektapi.herokuapp.com/users/register Register new user.
 * @apiName register
 * @apiGroup users
 *
 * @apiParam {String} userName User's unique username.
 * @apiParam {String} email User's unique email ID.
 * @apiParam {String} branch User's branch/department
 * @apiParam {String} password Users unique ID(Min 8 characters).
 *
 * @apiSuccess {String} message Description of result of API.
 * @apiSuccess {Object} data
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "meassage": "User successfully added",
 *       "data": {}
 *     }
 *
 * @apiError UserAlreadyExists The User credentials already exist.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 422 Not Found
 *     {
 *       "meassage": "User Name or Email Already Taken",
 *       "data": {}
 *     }
 * 
 * @apiError ValidationError Please Enter The Data in Specified Format.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 422 Unprocessable Entity
 *     {
 *       "message": "Validation Error Message",
 *       "data": {}
 *     }
 */
router.post('/register',validateRequest(validation_rules.register),registerUser);


/* API to verify user email */
router.get('/verify',accountVerification);



/**
 * @api {post} https://conektapi.herokuapp.com/users/login User log in.
 * @apiName login
 * @apiGroup users
 *
 * @apiParam {String} userId User's unique username/email.
 * @apiParam {String} password User's unique ID(Min 8 characters).
 *
 * @apiSuccess {String} message Description of result of API.
 * @apiSuccess {Object} data User details and user authentication token.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "meassage": "User Login Successful",
 *       "data": {
 *       "userName": "username of user",
 *       "email": "email of user",
 *       "userToken": "user unique authentication token"}
 *     }
 *
 * @apiError UserDoesNotExist The User credentials do not exist.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 422 Not Found
 *     {
 *       "meassage": "User does not exist",
 *       "data": {}
 *     }
 * 
 * @apiError ValidationError Please Enter The Data in Specified Format.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 422 Unprocessable Entity
 *     {
 *       "message": "Validation Error Message",
 *       "data": {}
 *     }
 * 
 * @apiError AuthenticationError User credentials do not match.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 422 Unprocessable Entity
 *     {
 *       "message": "UserName/email or password incorrect",
 *       "data": {}
 *     }
 */
router.post('/login',validateRequest(validation_rules.login),loginUser);


/**
 * @api {get} https://conektapi.herokuapp.com/users/logout/:token User log out.
 * @apiName logout
 * @apiGroup users
 *
 * @apiParam {String} token User's authentication token.
 *
 * @apiSuccess {String} message Description of result of API.
 * @apiSuccess {Object} data
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "meassage": "User logged out succesfully",
 *       "data": {}
 *     }
 *
 * @apiError UserNotLoggedIn The User not logged in.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 422 Not Found
 *     {
 *       "meassage": "User not logged in",
 *       "data": {}
 *     }
 */
router.get('/logout/:token',logoutUser);



/**
 * @api {post} https://conektapi.herokuapp.com/users/forgot-password Reset User password.
 * @apiName forgot-password
 * @apiGroup users
 *
 * @apiParam {String} email User's unique email.
 *
 * @apiSuccess {String} message Description of result of API.
 * @apiSuccess {Object} data
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "meassage": "Password reset link sent",
 *       "data": {}
 *     }
 *
 * @apiError UserDoesNotExist The User credentials do not exist.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 422 Not Found
 *     {
 *       "meassage": "User does not exist",
 *       "data": {}
 *     }
 * 
 * @apiError ValidationError Please Enter The Data in Specified Format.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 422 Unprocessable Entity
 *     {
 *       "message": "Validation Error Message",
 *       "data": {}
 *     }
 * 
 * @apiError ValidationError Password reset token already sent.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 422 Unprocessable Entity
 *     {
 *       "message": "Password reset link already sent",
 *       "data": {}
 *     }
 */
router.post('/forgot-password',validateRequest(validation_rules.forgotPassword),forgotPassword);


/* API to get new password */
router.get('/reset-password/',resetPassword);

/* API to set new password */
router.post('/set-new-password/:code',setNewPassword);


/**
 * @api {post} https://conektapi.herokuapp.com/users/profile/:token Get user profile.
 * @apiName get-profile
 * @apiGroup users
 *
 * @apiParam {String} usertoken User's authentication token.
 *
 * @apiSuccess {String} message Description of result of API.
 * @apiSuccess {Object} data
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "meassage": "User profile retrieved successfully",
 *       "data": {...}
 *     }
 *
 * @apiError InvalidDataError Invalid data passed.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 422 Unprocessable Entity
 *     {
 *       "meassage": "Appropriate error message",
 *       "data": {}
 *     }
 */
router.post('/profile',authenticator(),getProfile);

/**
 * @api {post} https://conektapi.herokuapp.com/users/edit-profile Edit user profile.
 * @apiName edit-profile
 * @apiGroup users
 *
 * @apiParam {String} usertoken User's authentication token.
 * @apiParam {String} newUserName User's new username.
 * @apiParam {String} newBio User's new bio.
 *
 * @apiSuccess {String} message Description of result of API.
 * @apiSuccess {Object} data
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "meassage": "User profile edited successfully",
 *       "data": {...}
 *     }
 *
 * @apiError InvalidDataError Invalid data passed.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 422 Unprocessable Entity
 *     {
 *       "meassage": "Appropriate error message",
 *       "data": {}
 *     }
 */
router.post('/edit-profile',authenticator(),editProfile);

router.get('/auth/:token',auth)

module.exports = router;
