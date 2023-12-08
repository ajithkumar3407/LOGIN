// import logo from './logo.svg';
import React,{useState} from 'react';
import Login from './Login';
import { LoginContext } from './LoginContext';
import Profile from './Profile';
import './App.css';

function App() {

  const [Username,setusername]=useState("")
  // const [password,setPassword]=useState("")


  const [showProfile,setShowprofile]=useState(false)
  return (
    <div>
      
      <LoginContext.Provider value={{Username,setusername,setShowprofile}}>
      
            {showProfile ? <Profile /> : <Login />}
        
      </LoginContext.Provider>
     
    </div>
  );
}

export default App;
