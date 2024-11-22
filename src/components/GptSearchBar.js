import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/language_constants'

import genAI from '../utils/genai'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'
import { HarmBlockThreshold, HarmCategory } from '@google/generative-ai'

const GptSearchBar = () => {
  const choosenlang=useSelector(store=>store.languageChange.lang)
  const dispatch=useDispatch();
  const searchText=useRef();
  const safe = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
  ];
    


  const handleSearch=async ()=>{ 
    const gptQuery="Act as a movie recomendation system and suggest some movies for the query: " + searchText.current.value +" .only give me names of five movies, comma separated like the example result given ahead. Example result: golmal,hera pheri,don,housefull,welcome"
    const model = genAI.getGenerativeModel({ model: "gemini-pro",safe });
    const result = await model.generateContent(gptQuery);
    const response = await result.response;
    const text = await response.text();
    const gptMovies=await text.split(",");
    const promiseArray=gptMovies.map((movie)=>searchMoviesTMDB(movie));
    const searchResults=await Promise.all(promiseArray);

    //console.log(searchResults);
    dispatch(addGptMovieResult({gptMovie:gptMovies,gptMovieResult:searchResults}))
  }

  const searchMoviesTMDB=async (movie)=>{
    //console.log(movie);
   const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
   const json=await data.json();
    //console.log(json);
   return json.results;
  }


  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input type='text' ref={searchText} placeholder={lang[choosenlang].gptSearchPlaceholder} className='p-4 m-4 col-span-9' />
            <button className='py-2 px-4 col-span-3 rounded-lg m-4 bg-red-700 text-white' onClick={handleSearch}>{lang[choosenlang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar