import { combineReducers } from "redux";
import authReducer from './auth'
import currentUserReducer from './currentUser'
import questionsReducer from './questions'
import usersReducer from './users.js'
import blogsReducer from './blogs.js'
export default combineReducers({
    authReducer, currentUserReducer,questionsReducer,usersReducer,blogsReducer
})