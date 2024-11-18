import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import languageChangeReducer from "./languageChangeSlice"
 
const appStore=configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        languageChange:languageChangeReducer,
    },
});

export default appStore;