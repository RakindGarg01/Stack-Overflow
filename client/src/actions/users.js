import * as api from '../api/index.js'
import { setCurrentUser } from './currentUser'
export const fetchAllUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllUsers()
        console.log(data);
        dispatch({ type: 'FETCH_USERS', payload: data})
    } catch (error) {
        console.log(error)
    }
}


export const updateProfile = (id , updateData) => async (dispatch) => {
    try{
        const { data } = await api.updateProfile(id, updateData)
        dispatch({ type: 'UPDATE_CURRENT_USER', payload: data })
    }catch(error){
        console.log(error)
    }
}

export const followUser = (id,usersfollowing) => async (dispatch) =>{
    try {
        const {data} = await api.followUser(id,usersfollowing)
        dispatch({ type: 'UPDATE_CURRENT_USER', payload: data })
        console.log(data)
        dispatch({type : 'AUTH', data: {result : data}})
        dispatch(setCurrentUser( {result : data} ))
        // console.log(currentUser)
    } catch (error) {
        console.log(error)
    }
}