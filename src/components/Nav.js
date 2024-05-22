import React,{useState,useEffect} from 'react';
import './Nav.css'

function Nav() {
    const[show,handleShow]=useState(false)

    const transitionNavbar=()=>{
        if (window.scrollY<100) {
            handleShow(true)
        }else{
            handleShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',transitionNavbar)
        return ()=>window.removeEventListener("scroll",transitionNavbar)
    },[])
    return ( 
        <div className={`nav ${show && `nav-black`}`}>
        <div className='nav-content '>
        <img className='nav-logo' src='https://github.com/navya123jacob/Netflix-clone/blob/main/src/logo.png?raw=true' alt='netflix-logo'/>
        <img className='nav-avatar' src='https://github.com/navya123jacob/Netflix-clone/blob/main/src/netflix-avatar.jpg?raw=true' alt='user-avatar'/>
        <div className='logout-bar'>logout</div>
        </div>
        </div>
    
);
}

export default Nav;