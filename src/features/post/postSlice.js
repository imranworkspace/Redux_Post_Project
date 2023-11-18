import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'1',title:'Learning Redux Toolkit',content:'I have heart good thing about redux concept'},
    {id:'2',title:'Slices',content:'I have heart good thing about redux concept'},
    {id:'3',title:'Provider',content:'I have heart about Provider redux concept'},

]

const postSlice  = createSlice({
    name:'posts',
    initialState,
// perform action here
    reducers:{
        postAdded(state,action){
            console.warn('action.payload ',action.payload)
            state.push(action.payload)
        }
    }

})

// store all post inside variable and pass action to other component 
export const saveAllPosts = (state) => state.posts;
// pass action to other component
export const {postAdded} = postSlice.actions

export default postSlice.reducer
