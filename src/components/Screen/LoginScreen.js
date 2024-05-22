import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignupScreen';


export default function LoginScreen() {
  const [signIn,setSignIn]=useState(false);

  return (
    <div className='loginScreen'>
     <div className="loginScreen-background">
      <img className='login-screen-logo' src="https://assets-global.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png" alt="Login-Back-Ground" />
      <button onClick={()=>setSignIn(true)} className='loginscreen_button'>Sign In</button>
      <div className="loginscreen_gradiant"></div>
     </div>
     <div className="loginScreen_body">
      {signIn ? (<SignUpScreen />):(
        <>
        <h1>Unlimited films, TV programmes and more.</h1>
      <h2>Watch anywhere,Cancel at any time.</h2>
      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      <div className="loginScreen_input">
        <div>

        <form action="">
        <input  type="email" placeholder='Email Address' />
        <button onClick={()=>setSignIn(true)} className='loginScreen_getstarted'>GET STARTED</button>

       </form>
        </div>
       
      </div>
      </>
      )}
      <>
      
      </>
     </div>
    </div>
  )
}
