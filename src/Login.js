import React, { useState, useContext } from "react";
import { LoginContext } from "./LoginContext";

function Login(){

   const {setusername,setShowprofile}=useContext(LoginContext)

   
    return(
        <div>
            <input type="text" placeholder="Enter Username" 
            onChange={(event)=>(
                setusername(event.target.value)
            )}
            />
            <input type="password" placeholder="Enter Password" />
            <button 
            onClick={()=>{setShowprofile(true)
            }}
            >Login</button>
         
        </div>
    )
}
export default Login;