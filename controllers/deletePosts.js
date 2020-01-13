var posts=require('./../models/Posts');

module.exports=function(req,res,next){
    var postId=req.body.postid;


    posts.deleteMany({parentPostId:postId},function(err,data){
        if(err){console.log("err-->"+err);
            return res.status(200).json({"message":"Post does not exist or postid invalid"});
        }
        else{
            posts.deleteOne({_id:postId},function(err,data){
                if(err){console.log("err-->"+err);
                return res.status(200).json({"message":"Post does not exist or postid invalid"});
                }
                else
                    return res.status(200).json({"message":"Post deleted successfully"});
            });
        }           
    });
}