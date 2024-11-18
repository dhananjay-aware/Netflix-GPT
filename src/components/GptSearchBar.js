import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/language_constants'

const GptSearchBar = () => {
  const choosenlang=useSelector(store=>store.languageChange.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input type='text' placeholder={lang[choosenlang].gptSearchPlaceholder} className='p-4 m-4 col-span-9' />
            <button className='py-2 px-4 col-span-3 rounded-lg m-4 bg-red-700 text-white'>{lang[choosenlang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar