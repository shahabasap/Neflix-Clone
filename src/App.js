import React, { Suspense, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import LoginScreen from './components/Screen/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import ProfileScreen from './components/Screen/ProfileScreen';
import SigninScreen from './components/Screen/SigninScreen';
import SignUpScreen from './components/Screen/SignupScreen';


function App() {
const user=useSelector(selectUser)
const dispatch=useDispatch()




 useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(userAuth => {
    if (userAuth) {
      dispatch(login({

        uid:userAuth.uid,
        email:userAuth.email

      }))
    } else {

      dispatch(logout())

    }
  },[dispatch]);


  return () => unsubscribe();
}, []);
  return (
    <div className='app'>
 <Suspense fallback={<Loading />}>
      <Router>
     
            <Routes>
              <Route exact path='/' element={<LoginScreen />} />
              <Route exact path='/profile' element={<ProfileScreen />} />
              <Route exact path='/signin' element={<SigninScreen />} />
              <Route exact path='/sign-up' element={<SignUpScreen />} />
            </Routes>
       
      
      </Router>
   
      </Suspense>
    </div>
   
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default App;
