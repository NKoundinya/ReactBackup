import React, { useState, useEffect } from "react";
import { SAuthenProvider } from "./AuthService/SAuthentication";
import User from "./UserPage/User";
import { TokenProvider } from "./AuthService/TokenContext";
import ShowData from "./UserPage/ShowData";

function Login() {

  const [token, setToken] = useState('')
  const [logged, setLoggedIn] = useState(false)

  function LogIn(t) {
    setLoggedIn(!logged)
    console.log(logged)
    setToken(t)
  }

  useEffect(() => {
    setLoggedIn(false)
  }, [logged, token])

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