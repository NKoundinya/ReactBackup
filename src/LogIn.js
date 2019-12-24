import React, { useContext, useState } from "react";
import { SAuthenProvider } from "./AuthService/SAuthentication";
import User from "./UserPage/User";

function Login() {
  
  const [logged, setLoggedIn] = useState(false)

  function LogIn() {
    setLoggedIn(!logged)
  }

  return (
    <div>
      <SAuthenProvider value={logged}>
        <User />
        <button onClick={LogIn}>{logged ? "Log In" : "Log Out"}</button>
      </SAuthenProvider>
    </div>
  )
}

export default Login;