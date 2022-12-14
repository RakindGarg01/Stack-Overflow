import React from 'react'
import './HomeMainBar.css'
import { useLocation, useNavigate } from 'react-router-dom';
import QuestionList from './QuestionList';
import { useSelector } from 'react-redux';
const HomeMainBar = () => {

  const user = 1;
  const navigate = useNavigate();
  const location = useLocation();
  const questionsList = useSelector(state => state.questionsReducer)
  // console.log(questionsList);
  // var questionsList = [{
  //   id: 1,
  //   votes: 3,
  //   // upVotes: 3,
  //   // downVotes: 2,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "node js", "react js", "mongo db", "express js"],
  //   userPosted: "mano",
  //   // userId: 1,
  //   askedOn: "jan 1",
  //   // answer: [{  
  //   //     answerBody: "Answer",
  //   //     userAnswered: 'kumar',
  //   //     answeredOn: "jan 2",
  //   //     userId: 2,
  //   // }]
  // }, {
  //   id: 2,
  //   votes: 0,
  //   // upVotes: 3,
  //   // downVotes: 2,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["javascript", "R", "python"],
  //   userPosted: "mano",
  //   askedOn: "jan 1",
  //   // userId: 1,
  //   // answer: [{
  //   //     answerBody: "Answer",
  //   //     userAnswered: 'kumar',
  //   //     answeredOn: "jan 2",
  //   //     userId: 2,
  //   // }]
  // }, {
  //   id: 3,
  //   votes: 1,
  //   // upVotes: 3,
  //   // downVotes: 2,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["javascript", "R", "python"],
  //   userPosted: "mano",
  //   askedOn: "jan 1",
  //   // userId: 1,
  //   // answer: [{
  //   //     answerBody: "Answer",
  //   //     userAnswered: 'kumar',
  //   //     answeredOn: "jan 2",
  //   //     userId: 2,
  //   // }]
  // }]

  const checkAuth = ()=>{
    if(user === null){
      alert('Login or SignUp to Ask a Question');
      navigate('/Auth');
    }else{
      navigate('/AskQuestion')
    }
  }

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className="ask-btn">Ask Question</button>
        {/* <Link to='/AskQuestion' className='ask-btn'>Ask Question</Link> */}
      </div>
      <div>
        {
          questionsList.data === null ?
            <h1>Loading...</h1> :
            <>
              <p>{questionsList.data.length} questions</p>
              <QuestionList questionsList={questionsList.data} />
            </>
        }
      </div>
    </div>
  )
}

export default HomeMainBar