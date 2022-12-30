import React from 'react'
import * as api from '../api'
const postBlog = (blogData , navigate) => async (dispatch) => {
  try {
        const {data} = await api.postBlog(blogData)
        dispatch({type : "POST_BLOG" , payload : data})
        dispatch(getAllBlogs());
        navigate('/Community')
  } catch (error) {
    console.log(error)
  }
}
export default postBlog;

export const getAllBlogs = ()=> async(dispatch)=>{
  try {
      const {data} = await api.getAllBlogs();
      dispatch({type : "GET_ALL_BLOGS" , payload : data})
  } catch (error) {
      console.log(error);
  }
}

export const deleteBlog = (id , navigate)=> async(dispatch)=>{
  try {
    const {data} = await api.deleteBlog(id);
    dispatch(getAllBlogs())
    navigate('/Community')
  } catch (error) {
    console.log(error);
  }
}

export const voteBlog = (id , value , userId)=> async(dispatch)=>{
  try {
    await api.voteBlog(id , value , userId);
    dispatch(getAllBlogs())
  } catch (error) {
    console.log(error);
  }
}