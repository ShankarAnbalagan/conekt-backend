const express = require('express');
router=express.Router();

const {createPost}=require('./../controllers/index');
const {authenticator,validation_rules,validateRequest}=require('./../utils/index');



/**
 * @api {post} /posts/create-post Create a new post.
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

module.exports=router;