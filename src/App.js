import React, { useEffect, useState } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomeScreen from './components/Screen/HomeScreen';
import LoginScreen from './components/Screen/LoginScreen';
import { auth } from './firebase';
import Context from './store/Context';


function App() {
const[user,SetUser]=useState(false)

 useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(userAuth => {
    if (userAuth) {
       SetUser(true)
    } else {
      SetUser(false)

    }
  });


  return () => unsubscribe();
}, []);
  return (
    <div className='app'>
    

      <Router>
      <Context>
        {
        !user?(<LoginScreen />):
        <Routes>
        <Route exact path='/' element={<HomeScreen />} />
   
      </Routes>}
      </Context>
      </Router>
    </div>
   
  );
}

export default App;
