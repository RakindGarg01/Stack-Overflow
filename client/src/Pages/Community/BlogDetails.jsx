import React from 'react'
import { useParams,Link, useLocation , useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import upvote from '../../assets/thumbs-up-solid.svg'
import downvote from '../../assets/thumbs-down-solid.svg'
import Pictures from '../../assets/Picture.jpg'
import './Community.css'
import Avatar from '../../components/Avatar/Avatar'
import copy from 'copy-to-clipboard'
import moment from 'moment';
import { deleteBlog } from '../../actions/blog';
import {voteBlog} from '../../actions/blog.js'
import { useState } from 'react';
import { useEffect } from 'react';
import { followUser } from '../../actions/users';

const BlogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const User = useSelector((state) => (state.currentUserReducer))
  const blogsList = useSelector(state => state.blogsReducer)
  const url = "http://localhost:3000"
  const [currentBlog , setCurrentBlog] = useState()

  useEffect(() => {
    console.log(User)
    blogsList.data?.filter(blog => blog._id === id).map(blog => {
      setCurrentBlog(blog)
      
      handleFollowBtn(blog?.userId, false)
    })

  },[blogsList])
  const handleShare = ()=>{
    copy(url + location.pathname);
    alert( "Copied url "+url+location.pathname);
    
  }
  const handleDelete = ()=>{
    dispatch(deleteBlog(id , navigate))
  }

  const handleUpVote = ()=>{
      dispatch(voteBlog(id , 'upVote' , User?.result?._id))
  }
  const handleDownVote = ()=>{
      dispatch(voteBlog(id , 'downVote' , User?.result?._id))
  }

  const [follow , setfollow] = useState(false)

  const handleFollowBtn = (userId, update = true)=>{ 
    console.log(User);
    if(!userId) return
    const followedusers = User?.result?.followedUsers || []
    if (followedusers.includes(userId)) {
      if(update) {
        followedusers.splice(followedusers.indexOf(userId) , 1);
        setfollow(false)
      }
      else {
        setfollow(true)
      }

    } else {
      if(update) {
        followedusers.push(userId)
        setfollow(true)
      }
      else {
        setfollow(false)
      }

    }
    if(update) {
      dispatch(followUser(User?.result?._id, followedusers))
    }

    console.log(followedusers, follow);
  }
  return (
    <div className="blog-details-page">
      {
        !currentBlog ?
          <h1>Loading</h1> :
          <>
                <div key={currentBlog._id}>
                  <div className="blog-details-container">
                    <div className="image-container">
                      <img src={currentBlog.blogImage} alt="Image" className='Image' />
                      {/* <img src={Pictures} alt="Image" className='Image' /> */}
                    </div>

                    <h1 className='Title'>{currentBlog.BlogTitle}</h1>
                    <div className="question-details-container-2">
                      <div className="like-time">
                        <div className="question-votes">
                          <div className="likes">
                            <p>{currentBlog.upVotes.length}&nbsp;</p>
                            <img src={upvote} onClick={handleUpVote} alt="Like" className='Like-icon' />
                          </div>
                        
                          <div className="dislike">
                          <img src={downvote} onClick={handleDownVote} alt="Dislike" className='Like-icon' />
                          <p>&nbsp; {currentBlog.downVotes.length}</p>
                          </div>
                                                    
                          <button className='follow-btn' onClick={()=>{handleFollowBtn(currentBlog.userId)}}>
                            {follow ? "Un-Follow" : "Follow"}
                          </button>
                        </div>
                        <div className='time'><p> Posted {moment(currentBlog.askedOn).fromNow()} by </p>
                            <Link to={`/Users/${currentBlog.userId}`} className="user-link" style={{ color: '#0086d8' }}>
                              <Avatar backgroundColor='orange' px='10px' py="8px" borderRadius="5px" >
                                {currentBlog.userPosted.charAt(0).toUpperCase()}
                              </Avatar> <span className="username">{currentBlog.userPosted}</span>
                            </Link>
                        </div>
                      </div>
                    </div>
                    <div className="title">
                      <h1>{currentBlog.blogTitle}</h1>
                    </div>
                    <div className="share-delete">
                    
                            <button type='button' onClick={handleShare} >Share</button>

                              {User?.result?._id === currentBlog?.userId && (
                                <button type='button' onClick={handleDelete} >Delete</button>
                              )}
                    </div>
                    
                      
                    <div className="describe">
                          
                          <p>{currentBlog.blogBody}</p>
                        </div>
                  </div>

                </div>

          </>
}
    </div>
  )
}

export default BlogDetails