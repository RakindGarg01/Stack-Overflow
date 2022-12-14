import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Auth from './Pages/Auth/Auth.jsx'
import Questions from './Pages/Questions/Questions.jsx'
import AskQuestion from './Pages/AskQuestion/AskQuestion.jsx'
import DisplayQuestion from './Pages/Questions/DisplayQuestion.jsx'
import Tags from './Pages/Tags/Tags.jsx'
import Users from './Pages/Users/Users.jsx'
import UserProfile from './Pages/UserProfile/UserProfile.jsx'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Auth' element={<Auth/>}/>
        <Route path='/Questions' element={<Questions/>}/>
        <Route path='/AskQuestion' element={<AskQuestion/>}/>
        <Route path='/Questions/:id' element={<DisplayQuestion/>}/>
        <Route path='/Tags' element={<Tags />}/>
        <Route path='/Users' element={<Users />}/>
        <Route path='/Users/:id' element={<UserProfile />}/>
    </Routes>
  )
}

export default AllRoutes