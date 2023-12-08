import React, { useContext } from "react";
import { LoginContext } from "./LoginContext";
function Profile(){
    const {Username}=useContext(LoginContext)
        return(
        <div>
            <h2>PROFILE PAGE</h2>
            <p>HELLO: {Username}  WELCOME....</p>
        </div>
    )
}

export default Profile;