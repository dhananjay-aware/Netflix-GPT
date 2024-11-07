import React, { useRef, useState } from 'react'
import { validateData } from '../utils/Validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';

import Header from './Header'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';



const Login = () => {
    
    const dispatch=useDispatch();
    

    const [isSignIn,setIsSignIn]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);

    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);

    const handleButtonClick=()=>{
        
        const message=validateData(email.current.value,password.current.value);
      
        setErrorMessage(message);
        
        if(isSignIn){
            //signin
            signInWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
            // Signed in 
                const user = userCredential.user;
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+":"+errorMessage);
            });
        }else{
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name.current.value, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ1ieB_9CnIZUK4wVSheXTxpRJkWbIRy2Z7A&s"
              }).then(() => {
                const {uid,email,displayName,photoURL} = auth.currentUser;
                 dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
            
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+":"+errorMessage);
   
            });
        }
    }

    const toggleSignin=()=>{
        setIsSignIn(!isSignIn);
    }
  return (
    <div>
        <Header/>
    <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_small.jpg' alt='bg-img'/>
    </div>
    <form onSubmit={(e)=>e.preventDefault()} className='absolute bg-black bg-opacity-80 text-white w-3/12 p-12  my-36 mx-auto right-0 left-0 rounded-lg'>
        <h1 className='text-3xl font-bold'>{isSignIn?"Sign In":"SignUp"}</h1>
        {!isSignIn && <input ref={name} className='p-2 my-4 w-full sm:mx-2 bg-gray-500' type='text' placeholder='Full Name' />}
        <input ref={email} className='p-2 my-4 w-full sm:mx-2 bg-gray-500' type='text' placeholder='Email Address' />
        <input ref={password} className='p-2 my-4 w-full sm:mx-2 bg-gray-500' type='password' placeholder='Password' />
        <p className='text-red-600'>{errorMessage}</p>
        <button className='p-2 my-6 w-full sm:mx-2 bg-red-700 rounded-lg' onClick={handleButtonClick}>{isSignIn?"Sign In":"SignUp"}</button>
        <h3 className='cursor-pointer' onClick={toggleSignin}>{isSignIn?"New to Netflix? Sign Up Now!":"Already registered? Sign In Now.."}</h3>
    </form>
    
    </div>
  )
}

export default Login