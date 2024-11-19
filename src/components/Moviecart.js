import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const Moviecart = ({poster_path}) => {
  if (!poster_path) return null;
  return (
    <div className='w-48 pr-4'>
        <img alt='Movie cart' src={IMG_CDN_URL+poster_path}/>
    </div>
  )
}

export default Moviecart