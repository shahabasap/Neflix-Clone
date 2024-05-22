import React, { createContext, useState } from 'react';
import { auth } from '../firebase';


export const AuthContext=createContext(null)

export default function Context({children}) {
    const[user,setUser]=useState("")
    return(
      <AuthContext.Provider value={{user,setUser}}>
        {children}
      </AuthContext.Provider>
    )
  }
  