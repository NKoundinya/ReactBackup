import React, { useContext } from 'react'
import SAuthentication from '../AuthService/SAuthentication'

export default function User() {

    const loggedIn = useContext(SAuthentication)

    return (
        <div>
            {
                loggedIn ?
                    "Login as a User"
                    :
                    "Logged In as a User"
            }
        </div>
    )
}