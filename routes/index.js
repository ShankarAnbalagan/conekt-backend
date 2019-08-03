var express = require('express');
var router = express.Router();

/**
 * @api {get} / 
 * @apiName server-status
 * @apiGroup index
 *
 *
 * @apiSuccess {String} message Description of result of API.
 * @apiSuccess {Object} data
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "meassage": "Server online",
 *       "data": {}
 *     }
 */
router.get('/', function(req, res, next) {
  res.status(200).json({"message":"Server Online", "data":{}});
});

module.exports = router;
