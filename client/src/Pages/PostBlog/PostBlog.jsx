import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import postBlog from '../../actions/blog.js'

const PostBlog = () => {

    
    const [blogTitle , setblogTitle] = useState('')
    const [blogBody , setblogBody] = useState('')
    const [blogImage , setblogImage] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const User = useSelector((state)=>(state.currentUserReducer));
    const handleEnter = (e) => {
        if(e.key === 'Enter'){
            setblogBody(blogBody + "\n")
        }
    }
    const handleSubmit = (e)=>{
        if(User == null){
            alert("Login or Signup to Post to the Community");
            navigate('/Auth');
          }
          else{
            e.preventDefault();
            dispatch(postBlog({blogTitle , blogBody , blogImage , userPosted : User?.result?.name  , userId : User?.result?._id },navigate))
          }
        
    }

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        let base64 = await convertToBase64(file);
        base64 = base64.split(",")[1]
        setblogImage({
            base64 : base64,
            name : file.name
        })
        
      }

  return (
    <div className="ask-question">
            <div className="ask-ques-container">
                <h1>Post a public Blog</h1>
                <form onSubmit={handleSubmit}  encType="multipart/form-data">
                    <div className="ask-form-container">
                        <label htmlFor="ask-ques-title">
                            <h4>Title</h4>
                            <p>Title Of your Blog Post.</p>
                            <input type="text" id='post-blog-title' onChange={(e) =>{setblogTitle(e.target.value)}} placeholder='e.g. Is there an R function for finding the index of an element in a vector?'/>
                        </label>
                        <label htmlFor="ask-ques-body">
                            <h4>Body</h4>
                            <p>Include all the Required Description of your Blog</p>
                            <textarea name="" id="post-blog-body" onChange={(e) =>{setblogBody(e.target.value)}}  cols="30" rows="10" onKeyPress={handleEnter}></textarea>
                        </label>
                        <label htmlFor="ask-ques-tags">
                            <h4>Tags</h4>
                            <p>Add up any Image or Video to Post</p>
                            {/* <input type="file" name='blogImage' id='post-blog-Image' onChange={(e) =>{setblogImage(e);
                            setTimeout(() => console.log(e.target.files[0]),1500 )}}  placeholder='e.g. (xml typescript wordpress)'/> */}
                            <input type="file" name='blogImage' id='post-blog-Image' onChange={(e) =>handleFileUpload(e)}  placeholder='e.g. (xml typescript wordpress)'/>
                            {/* {{blogImage }} */}
                        </label>
                    </div>
                    <input type="submit" value='Post Your Blog!!' className='review-btn'/>
                </form>
            </div>
        </div>
  )
}

export default PostBlog

function convertToBase64(file){
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }