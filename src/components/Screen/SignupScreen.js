import { useRef } from 'react'
import './SignUpScreen.css'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'
function SignUpScreen() {
    const emailRef=useRef()
    const passwordRef=useRef()
    const Register=async(e)=>{
        
           try
           {
            e.preventDefault()
     
            const userCredentials=await  createUserWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)

           }
           catch(error)
           {
            console.error(error.message);
        }
    }
    const SignIn=async(e)=>{
        
           try
           {
            e.preventDefault()

            const userCredentialMatching=await signInWithEmailAndPassword(auth,
            emailRef.current.value,passwordRef.current.value)

            console.log("hidata",userCredentialMatching)
           }
           catch(error)
           {
            console.error(error.message);
        }
    }
    
    return ( 
    <div className='signupScreen'>
      <form action="">
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email Address' />
        <input ref={passwordRef} type="password" placeholder='Password' />
        <button type='submit' onClick={SignIn}>Sign In</button>
        <h4><span className='signupScreen_gray'>New to Netflix? </span>    
        <span className='signupScreen_link' onClick={Register}>Sign Up now</span></h4>
      </form>
    </div> 
);
}

export default SignUpScreen;