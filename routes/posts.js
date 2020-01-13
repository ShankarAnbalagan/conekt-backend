const express = require('express');
router=express.Router();

const {createPost,getPosts,deletePost, createComment,getComments}=require('./../controllers/index');
const {validation_rules,validateRequest}=require('./../utils/index');
const  {authenticator}=require('./../middleware/index');



/**
 * @api {post} https://conektapi.herokuapp.com/posts/create-post Create a new post.
 * @apiName create-post
 * @apiGroup posts
 *
 * @apiParam {String} userToken User's authentication token.
 * @apiParam {String} text Body(text) of the post.
 * @apiParam {String} postCategory Post's category.
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
 * @api {post} https://conektapi.herokuapp.com/posts/get-posts Get existing posts.
 * @apiName get-post
 * @apiGroup posts
 *
 * @apiParam {String} usertoken User's authentication token.
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


/**
 * @api {post} https://conektapi.herokuapp.com/posts/delete-post Delete a post.
 * @apiName delete-post
 * @apiGroup posts
 *
 * @apiParam {String} usertoken User's authentication token.
 * @apiParam {String} postId Id of the post to delete.
 *
 * @apiSuccess {String} message Description of result of API.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "meassage": "Post deleted successfully",
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
router.post('/delete-post',authenticator(),deletePost);


/**
 * @api {post} https://conektapi.herokuapp.com/posts/create-comment Create a new comment.
 * @apiName create-comment
 * @apiGroup posts
 *
 * @apiParam {String} userToken User's authentication token.
 * @apiParam {String} text Body(text) of the comment.
 * @apiParam {String} parentPostId Id of parent post.
 * @apiParam {String} postCategory comment's category.
 *
 * @apiSuccess {String} message Description of result of API.
 * @apiSuccess {Object} data
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "meassage": "Comment successfully created",
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
 */
router.post('/create-comment',authenticator(),createComment);

/**
 * @api {post} https://conektapi.herokuapp.com/posts/get-comments Get comments for post.
 * @apiName get-comment
 * @apiGroup posts
 *
 * @apiParam {String} usertoken User's authentication token.
 * @apiParam {String} parentPostId Id of parent post.
 *
 * @apiSuccess {String} message Description of result of API.
 * @apiSuccess {Object} data
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "meassage": "Comment retreived successfully",
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
router.post('/get-comments',authenticator(),getComments);

module.exports=router;