import React, { useState } from 'react'

const Login = () => {

    const [isSignIn,setIsSignIn]=useState(true)

    const toggleSignin=()=>{
        setIsSignIn(!isSignIn);
    }
  return (
    <div>
    <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_small.jpg' alt='bg-img'/>
    </div>
    <form className='absolute bg-black bg-opacity-80 text-white w-3/12 p-12 my-36 mx-auto right-0 left-0'>
        <h1 className='text-3xl font-bold'>{isSignIn?"Sign In":"SignUp"}</h1>
        {!isSignIn && <input className='p-2 my-4 w-full bg-gray-500' type='text' placeholder='Full Name' />}
        <input className='p-2 my-4 w-full bg-gray-500' type='text' placeholder='Email Address' />
        <input className='p-2 my-4 w-full bg-gray-500' type='password' placeholder='Password' />
        <button className='p-2 my-6 w-full bg-red-700 rounded-lg'>{isSignIn?"Sign In":"SignUp"}</button>
        <h3 className='cursor-pointer' onClick={toggleSignin}>{isSignIn?"New to Netflix? Sign Up Now!":"Already registered? Sign In Now.."}</h3>
    </form>
    
    </div>
  )
}

export default Login