import React, { useEffect, useState } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomeScreen from './components/Screen/HomeScreen';
import LoginScreen from './components/Screen/LoginScreen';
import { auth } from './firebase';

function App() {
const[kk,SetUser]=useState(false)
const data=null

const user=true
 useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(userAuth => {
    if (userAuth) {
       SetUser(true)
    } else {
      SetUser(true)

    }
  });


  return () => unsubscribe();
}, []);
  return (
    <div className='app'>
    

      <Router>
        {
        !user?(<LoginScreen />):
        <Routes>
        <Route exact path='/' element={<HomeScreen />} />
   
      </Routes>}
          
      </Router>
    </div>
   
  );
}

export default App;
