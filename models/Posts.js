const mongoose=require('mongoose');

const PostsSchema=mongoose.Schema({
    opID:String,
    opName:String,
    postCategory:String,
    parentPost:{type:String, default:"root"},
    text:String,
    isActive:{type:Boolean, default:true},
    timeCreated:Number,
    displayTime:String
});

module.exports=mongoose.model('PostsSchema',PostsSchema);