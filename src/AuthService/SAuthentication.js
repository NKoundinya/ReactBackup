import React from 'react'

const SAuthentication = React.createContext({ isLoggedIn: false })

export const SAuthenProvider = SAuthentication.Provider
export const SAuthenConsumer = SAuthentication.Consumer

export default SAuthentication;