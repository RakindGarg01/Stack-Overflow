const blogsReducer = (state  = {data : null}, action)=>{
    switch (action.type){
        case "POST_BLOG" :
            return { ...state}
        case "GET_ALL_BLOGS" :
            return { ...state, data: action.payload}
        default :
            return state
    }
}
export default blogsReducer

