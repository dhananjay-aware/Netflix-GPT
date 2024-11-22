import React from 'react'
import { bg_img } from '../utils/constants'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearch = () => {
  return (
    <><div className='fixed -z-10 '>
    <img className='h-screen object-cover md:h-auto' src={bg_img} alt='bg-img'/>
</div>
<div className=''>
      
    <GptSearchBar/>
    <GptMovieSuggestion/>
    

</div></>
    
  )
}

export default GptSearch