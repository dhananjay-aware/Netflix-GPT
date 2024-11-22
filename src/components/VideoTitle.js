import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-6 md:px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block w-1/3'>{overview}</p>
        <div className='flex'>
            <button className='bg-white flex items-center py-2 md:p-4 px-5 md:px-12 text-black md:text-2xl rounded-lg my-4 hover:bg-opacity-80'><FaPlay />Play</button>
            <button className='bg-gray-500 flex p-4 px-12 mx-3 text-white text-2xl md:items-center rounded-lg my-4 bg-opacity-50 hidden md:inline-block'><IoIosInformationCircle />More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle