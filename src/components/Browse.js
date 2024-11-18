import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';



const Browse = () => {
  const showGpt=useSelector(store=>store.gpt.showGptStatus);
  //console.log("broswer executed");
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
    
  return (
    <div>
      <Header/>
      {showGpt?(<GptSearch/>):(<><MainContainer/>
        <SecondaryContainer/></>)}
      
      

    </div>
  )
}

export default Browse