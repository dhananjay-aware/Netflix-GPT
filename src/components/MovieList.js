import React from 'react'
import Moviecart from './Moviecart'

const MovieList = ({title,movies}) => {

    console.log(movies);
  return (
    <div>
      <h1 className='py-2 text-3xl text-white'>{title}</h1>
        <div className='flex overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
        
        <div className='flex'>
        {movies?.map(movie=><Moviecart poster_path={movie.poster_path}/>)}
        </div> 
        </div>
    </div>
  )
}

export default MovieList