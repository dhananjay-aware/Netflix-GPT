import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptStatus:false,
    },
    reducers:{
        toggleShowGptStatus:(state)=>{
            state.showGptStatus=!state.showGptStatus;
        },
    }
})

export const {toggleShowGptStatus}=gptSlice.actions;

export default gptSlice.reducer;