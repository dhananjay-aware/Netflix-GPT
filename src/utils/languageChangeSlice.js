import { createSlice } from "@reduxjs/toolkit";

const languageChangeSlice=createSlice({
    name:"languageChange",
    initialState:{lang:"en"},
    reducers:{
        changeLanguage:(state,action)=>{
            state.lang=action.payload;
        }
    }
})

export const {changeLanguage}=languageChangeSlice.actions;
export default languageChangeSlice.reducer