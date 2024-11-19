import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptStatus:false,
        gptMovie:null,
        gptMovieResult:null,
    },
    reducers:{
        toggleShowGptStatus:(state)=>{
            state.showGptStatus=!state.showGptStatus;
        },
        addGptMovieResult:(state,action)=>{
            const {gptMovie,gptMovieResult}=action.payload;
            state.gptMovie=gptMovie;
            state.gptMovieResult=gptMovieResult;
        }
    }
})

export const {toggleShowGptStatus,addGptMovieResult}=gptSlice.actions;

export default gptSlice.reducer;