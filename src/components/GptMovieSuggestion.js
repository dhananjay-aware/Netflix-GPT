import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const {gptMovie,gptMovieResult}=useSelector(store=>store.gpt);
  if(!gptMovie) return null;

  return (
   <div className='p-3 mt-4 bg-black bg-opacity-70'>
    <div>
      {gptMovie.map((gptMovie,index)=>(<MovieList title={gptMovie} movies={gptMovieResult[index]}/>))}
    </div>
   </div>
  )
}

export default GptMovieSuggestion