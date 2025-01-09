import React from 'react'
import './LoginScreen.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';
import HomeScreen from './HomeScreen';
import { useNavigate } from 'react-router-dom';




export default function LoginScreen() {

  const user=useSelector(selectUser)
  const navigate=useNavigate()
 

  return (
    <div src="">
    {user ?(<HomeScreen />):(<div className='loginScreen'>
     <div className="loginScreen-background">
      <img className='login-screen-logo' src="https://assets-global.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png" alt="Login-Back-Ground" />
      <button  className='loginscreen_button' onClickCapture={()=>navigate('/signin')}>Sign In</button>
      <div className="loginscreen_gradiant"></div>
     </div>
     <div className="loginScreen_body">

        <>
        <h1>Unlimited films, TV programmes and more.</h1>
      <h2>Watch anywhere,Cancel at any time.</h2>
      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      <div className="loginScreen_input">
        <div>

        <form action="">
        <input  type="email" placeholder='Email Address' />
        <button className='loginScreen_getstarted'>GET STARTED</button>

       </form>
        </div>
       
      </div>
      </>

     </div>
    </div>)
  }
  </div>



)
}
