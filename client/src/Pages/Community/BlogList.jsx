import React from 'react'
import Blogs from './Blogs'

const BlogList = ({blogsList}) => {
  // console.log(blogsList);
  return (
    <>
        {
            blogsList.map((blog)=>(
                <Blogs blog={blog} key={blog._id} />
            ))
        }
    </>
  )
}

export default BlogList