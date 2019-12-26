import React, { useState } from "react";
import { SAuthenProvider } from "./AuthService/SAuthentication";
import User from "./UserPage/User";
import { TokenProvider } from "./AuthService/TokenContext";
import ShowData from "./UserPage/ShowData";
import { Link, Switch, Route } from "react-router-dom";

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
              <Link to='\ShowData' component={ShowData}>
                ShowData
              </Link>
              <Switch>
                <Route path="\ShowData" />
              </Switch>
            </TokenProvider>
            :
            null
        }
      </SAuthenProvider>
    </div>
  )
}

export default Login;