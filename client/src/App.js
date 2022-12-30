import {BrowserRouter as Router} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from './actions/question';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import { fetchAllUsers } from './actions/users.js';
import Chat from './components/ChatBot/Chat';
import { getAllBlogs } from './actions/blog.js';


function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAllQuestions());
    dispatch(getAllBlogs());
    dispatch(fetchAllUsers());
  },[dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <AllRoutes/>
        <Chat />
      </Router>
    </div>
  );
}

export default App;
