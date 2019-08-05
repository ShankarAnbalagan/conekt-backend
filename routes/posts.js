const express = require('express');
router=express.Router();

const {createPost,getPosts}=require('./../controllers/index');
const {validation_rules,validateRequest}=require('./../utils/index');
const  {authenticator}=require('./../middleware/index');



/**
 * @api {post} https://conektapi.herokuapp.com/posts/create-post Create a new post.
 * @apiName create-post
 * @apiGroup posts
 *
 * @apiParam {String} userToken User's authentication token(In http header).
 * @apiParam {String} text Body(text) of the post.
 * @apiParam {String} postCategory Post's category.
 * @apiParam {String} parentPost If post is main post or comment(set to root for main post | set to comment for comment).
 *
 * @apiSuccess {String} message Description of result of API.
 * @apiSuccess {Object} data
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "meassage": "Post successfully created",
 *       "data": {}
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
router.post('/create-post',authenticator(),validateRequest(validation_rules.posts),createPost);

/**
 * @api {post} https://conektapi.herokuapp.com/posts/get-post Get existing posts.
 * @apiName get-post
 * @apiGroup posts
 *
 * @apiParam {String} userToken User's authentication token(In http header).
 * @apiParam {String} category category of post.
 *
 * @apiSuccess {String} message Description of result of API.
 * @apiSuccess {Object} data
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "meassage": "Post retreived successfully",
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
router.post('/get-posts',authenticator(),getPosts);

module.exports=router;