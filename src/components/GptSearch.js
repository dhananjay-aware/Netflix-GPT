import React from 'react'
import { bg_img } from '../utils/constants'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearch = () => {
  return (
    <div>
      <div className='fixed -z-10'>
        <img src={bg_img} alt='bg-img'/>
    </div>
    <GptSearchBar/>
    <GptMovieSuggestion/>
    

</div>
  )
}

export default GptSearch