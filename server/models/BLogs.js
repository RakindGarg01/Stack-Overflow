import mongoose from 'mongoose';

const BlogsSchema = mongoose.Schema({
    blogTitle : {type : String , required : true},
    blogBody : {type : String , required : true},
    blogImage : {type : String , required: true},
    upVotes : {type : [String] , default : []},
    downVotes : {type : [String] , default : []},
    userPosted : {type : String , required : true},
    userId : {type : String},
    noofComments : {type : Number , default : 0},
    askedOn : {type : Date , default : Date.now},
    Comments : [{
        CommentBody : String,
        userCommented : String,
        userId : String,
        CommentedOn : {type : Date , default : Date.now}
    }]
})

export default mongoose.model("Blog" , BlogsSchema);