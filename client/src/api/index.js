import axios from 'axios'
const API = axios;

API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData)
export const getAllQuestions = () => API.get('/questions/get');
export const postAnswer = (id, noOfAnswers, answerBody, userAnswered,userId) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered,userId})
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`) 
export const voteQuestion = (id, value , userId) => API.patch(`/questions/vote/${id}`, { value,userId })
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers})

export const postBlog = (blogData) => API.post('/community/Post' , blogData)
export const getAllBlogs = ()=> API.get('/community/Get')
export const deleteBlog = (id)=> API.delete(`/community/delete/${id}`)
export const voteBlog = (id, value , userId) => API.patch(`/community/vote/${id}` ,  {value , userId})

export const fetchAllUsers = () => API.get('/user/getAllUsers');
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)
export const followUser = (id,usersfollowing) => API.patch(`/user/blog`,{id , usersfollowing})