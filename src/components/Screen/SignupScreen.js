import { useRef } from 'react'
import './SignUpScreen.css'
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
function SignUpScreen() {
    const emailRef=useRef()
    const passwordRef=useRef()
    const name=useRef()
    const navigate=useNavigate()
    const Register=async(e)=>{
               
            let  mesg=()=>toast("You are registration completed successfully")
        
           try
           {
            e.preventDefault()
            const userCredentials=await  createUserWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
            if (userCredentials) {
              navigate('/signin')
            }
            else{
              mesg=()=>toast("You registration failed")
            }
             


           }
           catch(error)
           {
            console.error(error.message);
        }
    }
  
    
    return ( 
    <div className='signupScreen'>
      <form action="">
        <h1>Sign Up Here</h1>
        <input ref={name} type="name" placeholder='Your name' />
        <input ref={emailRef} type="email" placeholder='Email Address' />
        <input ref={passwordRef} type="password" placeholder='Password' />
        <button type='submit' onClick={Register}>Sign Up</button>
        <ToastContainer />
        <h4><span className='signupScreen_gray'>New to Netflix? </span>    
        <span className='signupScreen_link' onClick={()=>navigate('/signin')}>Sign in here</span></h4>
      </form>
    </div> 
);
}

export default SignUpScreen;