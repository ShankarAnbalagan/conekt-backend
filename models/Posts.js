const mongoose=require('mongoose');

const PostsSchema=mongoose.Schema({
    opID:String,
    postCategory:String,
    parentPost:{type:String, default:"root"},
    text:String,
    isActive:{type:Boolean, default:true}
});

module.exports=mongoose.model('PostsSchema',PostsSchema);