import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES, user_avatar } from '../utils/constants';
import { toggleShowGptStatus } from '../utils/gptSlice';
import { changeLanguage } from '../utils/languageChangeSlice';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((store)=>store.user);
  const showGpt=useSelector(store=>store.gpt.showGptStatus);
  const handleSignout=()=>{
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate('/');
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(()=>{
    const unSubscribe =onAuthStateChanged(auth, (user) => {
        if (user) {             
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
          navigate('/browse')
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate('/')
          
        }
      });
    return ()=>unSubscribe();
},[])

 const toggleGpt=()=>{
    dispatch(toggleShowGptStatus());
    console.log("toggleGpt");
 }

 const handleLangChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
 }

  return (
    <div className='absolute bg-gradient-to-b from-black w-screen z-10 flex justify-between text-white'>
      <div>
        <img className='w-48 px-4 py-2' src={LOGO} alt='netflix logo'/>
      </div>
{ user && <div className='mr-6 mt-2 flex'>
        
        <button className='bg-purple-700 text-white rounded-lg py-2 my-3 px-4 mx-4' onClick={toggleGpt}>{showGpt?"Home":"GPT Search"}</button>
        {showGpt && <select className='bg-slate-600 my-4 rounded-lg' onChange={handleLangChange}>
          {SUPPORTED_LANGUAGES.map((lang)=>(<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
        </select>}
        <button className='p-2 m-2' onClick={handleSignout}>Sign Out</button>
        <img className='w-12 h-12 p-2 m-2' src={user_avatar}alt='userIcon'/>
      </div>}
    </div>
  )
}

export default Header