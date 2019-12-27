import React, { useState } from "react";
import { SAuthenProvider } from "./AuthService/SAuthentication";
import User from "./UserPage/User";
import { TokenProvider } from "./AuthService/TokenContext";
import ShowData from "./UserPage/ShowData";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom";

function LogIn() {

  const [token, setToken] = useState('')
  const [logged, setLoggedIn] = useState(false)

  function LoggingIn(t) {
    setLoggedIn(!logged)
    setToken(t)
  }

  return (
    <div>
      <SAuthenProvider value={logged}>
        <User LoggingIn={LoggingIn} />
        {
          logged ?
            <Router>
              <TokenProvider value={token}>
                <li><Link to='/ShowData' component={ShowData}>ShowData</Link></li>
                <Switch>
                  <Route path={'/showData'}>
                    <ShowData />
                  </Route>
                </Switch>
              </TokenProvider>
            </Router>
            :
            null
        }
      </SAuthenProvider>
    </div>
  )
}

export default LogIn;