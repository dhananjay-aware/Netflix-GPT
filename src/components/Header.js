import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((store)=>store.user);
  const handleSignout=()=>{
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate('/');
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
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
},[])
  return (
    <div className='absolute bg-gradient-to-b from-black w-screen z-10 flex justify-between'>
      <div>
        <img className='w-48 px-4 py-2' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix logo'/>
      </div>
{ user && <div className='mr-6 mt-2 flex'>
        <button className='p-2 m-2' onClick={handleSignout}>⛔</button>
        <img className='w-12 h-12 p-2 m-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ1ieB_9CnIZUK4wVSheXTxpRJkWbIRy2Z7A&s'alt='userIcon'/>
      </div>}
    </div>
  )
}

export default Header