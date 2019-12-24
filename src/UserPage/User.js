import React, { useState } from 'react'
import CustomInput from '../CustomTags/CustomInput'

export default function User(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [logIn, setLogIn] = useState(true)

    function CheckLogin() {
        console.log(logIn);
        
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
                    throw Error('Username Password Invalid')
                } else {
                    setLogIn(!logIn)
                    props.LogIn(res.token)
                }
            })
            .catch(err => {
                setLogIn(logIn)
            })
            console.log(logIn);
    }

    return (
        <div>
            {logIn ?
                <div>
                    <CustomInput type="text" value={username} onValueChange={(e) => setUsername(e.target.value)} />
                    <CustomInput type="password" value={password} onValueChange={(e) => setPassword(e.target.value)} />
                </div>
                : null
            }
            <button onClick={CheckLogin}>{logIn ? "Log In" : "Log Out"}</button>
        </div>
    )
}