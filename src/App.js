import React, { useEffect, useState } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomeScreen from './components/Screen/HomeScreen';
import LoginScreen from './components/Screen/LoginScreen';
import SignInScreen from './components/Screen/SignInScreen';
import { auth } from './firebase';
import Context from './store/Context';




function App() {

  return (
    <div className='app'>
    

      <Router>
      <Context>

        <Routes>
        <Route exact path='/' element={<LoginScreen />} />
        <Route exact path='/home' element={<HomeScreen />} />
        <Route exact path='/login' element={<SignInScreen />} />
   
   
      </Routes>
      </Context>
      </Router>
    </div>
   
  );
}

export default App;
