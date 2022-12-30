import Blog from '../models/BLogs.js'
import mongoose from 'mongoose'
import fs from 'fs'
export const PostBlog = (req,res)=>{
        console.log(req.body)
        const imageBase = req.body.blogImage.base64;
        const buffer = Buffer.from(imageBase, "base64");
        const newImage = Date.now()+req.body.blogImage.name
        fs.writeFileSync("./Uploads/"+newImage, buffer)


            const NewBlog = new Blog({
                blogTitle : req.body.blogTitle,
                blogBody : req.body.blogBody,
                userPosted: req.body.userPosted,
                userId : req.body.userId,
                blogImage: newImage
            })
        
            NewBlog.save()
            .then(()=>{res.send("Data Posted Sucessfully")})
            .catch((err)=>{res.send(err)})
      
}

// export const PostBlog = async (req,res)=>{
//     const postBlogData = req.body;
//     console.log(postBlogData)
//     // const postBblog = new Blog(postBlogData);
//     const postBlog = new Blog({ ...postBlogData , userId : req.userId })
//     console.log(postBlog)
//     try {
//         await postBlog.save();
//         res.status(200).json("Posted a Blog Sucessfully")
//     } catch (error) {
//         console.log(error)
//         res.status(409).json("Could not post the new Blog")
//     }
// }

export const getAllBlogs = async(req,res)=>{
    try {
        const blogList = await Blog.find();
        blogList.forEach((blog)=>{
            const base64 = fs.readFileSync("./Uploads/"+blog.blogImage , "base64")
            const extenstion  = blog.blogImage.split(".")[1]
            blog.blogImage = "data:image/" + extenstion +";base64," + base64;
        })
        res.status(200).json(blogList)
    } catch (error) {
        console.log(error)
        res.status(409).json("Could ot fetch all blogs")
    }
}

export const deleteBlog = async(req,res)=>{
    const {id:_id} =req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Blog Unavaliable')
    }

    try {
        await Blog.findByIdAndRemove(_id);
        res.status(200).json("Sucessfully Deleted...")
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

export const voteBlog = async(req,res)=>{
    const { id: _id } = req.params;
    const { value,userId } = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Blog is Unavailable...');
    }

    try {
        const blog = await Blog.findById(_id);
        const upIndex = blog.upVotes.findIndex((id) => id === String(userId))
        const downIndex = blog.downVotes.findIndex((id) => id === String(userId))

        if(value === 'upVote'){
            if(downIndex !== -1){
                blog.downVotes = blog.downVotes.filter((id) => id !== String(userId))
            } 
            if(upIndex === -1){
                blog.upVotes.push(userId)
            }else{
                blog.upVotes = blog.upVotes.filter((id) => id !== String(userId))
            }
        }
        else if(value === 'downVote'){
            if(upIndex !== -1){
                blog.upVotes = blog.upVotes.filter((id) => id !== String(userId))
            } 
            if(downIndex === -1){
                blog.downVotes.push(userId)
            }else{
                blog.downVotes = blog.downVotes.filter((id) => id !== String(userId))
            }
        }

        await Blog.findByIdAndUpdate(_id , blog)
        res.status(200).json("Voted Sucessfully")
    } catch (error) {
        res.status(404).json("Id not Found for voting")
    }
}