import React, { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import Login from './Login'
import {createBrowserRouter} from "react-router-dom"
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';


const Body = () => {
    
    
    const appRouter=createBrowserRouter([
        {
        path:"/",
        element:<Login/>,
    },
    {
        path:"/browse",
        element:<Browse/>,
    },]);

    //useNowPlayingMovies();

  return (
    <div>
        
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body