import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
const Blogs = ({ blog }) => {
    // console.log(blog)
    return (
        // <div className="display-blogs-container">
            <Link to={`/Community/${blog._id}`} className="display-blogs-container">
            <div className="image-container">
                <img src={blog.blogImage} className='Picture' />
            </div>
            <div className="title-container">
                <h1>{blog.blogTitle}</h1>
            </div>
            <div className="info-container">
                <div className="display-likes">
                    <p>{blog.upVotes.length} Likes</p>
                </div>
                <div className="display-blogs-comments">
                    <p>{blog.noofComments} Comments</p>
                </div>
                <div>
                    <p className="display-time">
                        asked {moment(blog.askedOn).fromNow()} by {blog.userPosted}
                    </p>
                </div>
            </div>
            </Link>
    
    )
}

export default Blogs