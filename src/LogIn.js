import React, { useState } from "react";
import { SAuthenProvider } from "./AuthService/SAuthentication";
import User from "./UserPage/User";
import { TokenProvider } from "./AuthService/TokenContext";
import ShowData from "./UserPage/ShowData";

function Login() {

  const [token, setToken] = useState('')
  const [logged, setLoggedIn] = useState(false)

  function LogIn(t) {
    setLoggedIn(!logged)
    setToken(t)
  }

  return (
    <div>
      <SAuthenProvider value={logged}>
        <User LogIn={LogIn} />
        {
          logged ?
            <TokenProvider value={token}>
              <ShowData />
            </TokenProvider>
            :
            null
        }
      </SAuthenProvider>
    </div>
  )
}

export default Login;