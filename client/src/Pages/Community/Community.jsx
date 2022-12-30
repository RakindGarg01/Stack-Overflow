import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Community.css';
import BlogList from './BlogList';
import Picture from '../../assets/Picture.jpg'
const Community = () => {

  const navigate = useNavigate();
  
  const blogsList = useSelector(state => state.blogsReducer)
  
  // var blogsList = [{ 
  //   _id: 1,
  //   upVotes: 3,
  //   downVotes: 1,
  //   noofComments : 2,
  //   BlogTitle: "How are You",
  //   BlogBody: "Hello, How are You",
  //   userPosted: "Keshav",
  //   askedOn: "1 jan",
  //   userId : 1,
  //   BlogImage : Picture,
  //   Comments : [{
  //     CommentBody : "I am Good",
  //     userCommented : "Keshav",
  //     userId : '4',
  //     CommentedOn : "jan 2"
  //   }]
  // }, {
  //   _id: 2,
  //   upVotes: 3,
  //   downVotes: 1,
  //   noofComments : 2,
  //   BlogTitle: "How are You",
  //   BlogBody: "Hello, How are You",
  //   userPosted: "Keshav",
  //   askedOn: "1 jan",
  //   userId : 2,
  //   BlogImage : Picture,
  //   Comments : [{
  //     CommentBody : "I am Good",
  //     userCommented : "Keshav",
  //     userId : '4',
  //     CommentedOn : "jan 2"
  //   }],
  //   // Image : "C:\Users\rakin\Desktop\avatar.jpg"
  // }, {
  //   _id: 3,
  //   upVotes: 3,
  //   downVotes: 1,
  //   noofComments : 2,
  //   BlogTitle: "How are You",
  //   BlogBody: "Hello, How are You",
  //   userPosted: "Keshav",
  //   askedOn: "1 jan",
  //   userId : 3,
  //   BlogImage : Picture,
  //   Comments : [{
  //     CommentBody : "I am Good",
  //     userCommented : "Keshav",
  //     userId : '4',
  //     CommentedOn : "jan 2"
  //   }],
  //   // Image : "C:\\Users\\rakin\\Desktop\\avatar.jpg"
  // },
  // {
  //   _id: 4,
  //   upVotes: 3,
  //   downVotes: 1,
  //   noofComments : 2,
  //   BlogTitle: "How are You",
  //   BlogBody: "Hello, How are You",
  //   userPosted: "Keshav",
  //   askedOn: "1 jan",
  //   userId : 4,
  //   BlogImage : Picture,
  //   Comments : [{
  //     CommentBody : "I am Good",
  //     userCommented : "Keshav",
  //     userId : '4',
  //     CommentedOn : "jan 2"
  //   }],
  //   // Image : "C:\\Users\\rakin\\Desktop\\avatar.jpg"
  // },
  // {
  //   _id: 5,
  //   upVotes: 3,
  //   downVotes: 1,
  //   noofComments : 2,
  //   BlogTitle: "How are You",
  //   BlogBody: "Hello, How are You",
  //   userPosted: "Keshav",
  //   askedOn: "1 jan",
  //   userId : 5,
  //   BlogImage : Picture,
  //   Comments : [{
  //     CommentBody : "I am Good",
  //     userCommented : "Keshav",
  //     userId : '4',
  //     CommentedOn : "jan 2"
  //   }],
  //   // Image : "C:\\Users\\rakin\\Desktop\\avatar.jpg"
  // }];
  // console.log(blogsLis);
  const checkAuth = ()=>{
    navigate('/PostBlog');
  }
  return (
    <div className='blog-area'>
      <div className="blogs-header">
            <div className="blog-heading">
            <h1>Blogs</h1></div>
              <button onClick={checkAuth} className='post-btn'>Post Your Blog!!</button>
      </div>
      
      {
        blogsList.data === null ?
          <h1>Loading...</h1> :
          <>
            <p className='blog-length'>{blogsList.data.length} Blogs</p>

            <div className="wrapper">
              <BlogList blogsList={blogsList.data} />
            </div>
          </>
      }
    </div>
  )
}

export default Community