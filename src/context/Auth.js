import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../config/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const AuthContext = createContext()


const initialState = { isAuth: false, user: {} }

const AuthProvider = ({ children }) => {

    const [state, setState] = useState(initialState)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setState(s => ({ ...s, isAuth: true, user }))
                console.log('user', user)
            } else {
                console.log('user is logout')
            }
        });

    }, [])

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                alert('Logged out successfully')
            })
            .catch((error) => {
                alert('something went wrong! while logging out')
                console.error(error)
            })
    }


    return (
        <AuthContext.Provider value={{ ...state, setAuthState: setState, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)

export default AuthProvider
