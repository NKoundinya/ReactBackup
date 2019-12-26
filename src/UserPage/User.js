import React, { useState } from 'react'
import CustomInput from '../CustomTags/CustomInput'

export default function User(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [logIn, setLogIn] = useState(true)

    function CheckLogin() {
        fetch('http://localhost:5000/Users/authenticate',
            {
                method: 'POST',
                body: JSON.stringify({
                    "username": username,
                    "password": password
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(res => {
                if (res.token === undefined) {
                    debugger
                    throw Error('Username Password Invalid')
                } else {
                    setLogIn(!logIn)
                    if (logIn === false) {
                        res.token = undefined;
                    }
                    props.LogIn(res.token)
                }
            })
            .catch(err => {
                setLogIn(logIn)
            })
        
    }

    return (
        <div>
            {logIn ?
                <div>
                    <CustomInput style={{ 'border': '3px solid black'}} type="text" value={username} onValueChange={(e) => setUsername(e.target.value)} />
                    <CustomInput type="password" value={password} onValueChange={(e) => setPassword(e.target.value)} />
                </div>
                : null
            }
            <button onClick={CheckLogin}>{logIn ? "Log In" : "Log Out"}</button>
        </div>
    )
}