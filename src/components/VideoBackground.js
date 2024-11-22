import React from 'react'

import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {

  const trailerVdo=useSelector(store=>store.movies.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div><iframe 
    className='w-screen aspect-video' 
    src={"https://www.youtube.com/embed/"+trailerVdo?.key+"?&autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&showinfo=0&playlist="+trailerVdo?.key}
    title="YouTube video player"  
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    ></iframe></div>
  )
}

export default VideoBackground