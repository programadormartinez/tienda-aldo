import React from 'react'
import { useState, createContext, useContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../configurations/firebaseConfig';
import { AlertContext } from './AlertContext';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState({
        signupError: '',
        loginError: ''
    });

    const alertContext = useContext(AlertContext);

    const navigate = useNavigate();

    const signup = (email, password) => {
        setError({...error, signupError: ''});
        createUserWithEmailAndPassword(auth, email, password)
            .then(()=> {
                setUser(userCredential.user);
                window.localStorage.setItem('accessToken', user.stsTokenManager.accessToken);
                navigate('/');
            })
            .catch((error) => {
                console.log('====================================');
                console.log(error.code);
                console.log('====================================');
                if (error.code === 'auth/weak-password') {
                    setError({...error, signupError: 'La contraseña es muy corta.'})
                    alertContext.handleClick('La contraseña es muy corta.', 'error')
                }else if(error.code === 'auth/email-already-in-use'){
                    alertContext.handleClick('Ya hay una cuenta registrada con este email.', 'error')
                } else {
                    alertContext.handleClick(error.message, 'error')
                    setError({...error, signupError: error.message})
                }
            })
    }

    const login = (email, password) => {
        setError({...error, loginError: ''});
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              setUser(userCredential.user);
              window.localStorage.setItem('accessToken', user.stsTokenManager.accessToken);
              navigate('/');
            })
            .catch((error) => {
                if (error.message == 'Firebase: Error (auth/wrong-password).') {
                    alertContext.handleClick('Usuario incorrecto', 'error')
                }
            })
    }

    useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      })
    }, [])
    
    const logout = () => {
        signOut(auth);
        navigate('/login');
    }
  
    return <AuthContext.Provider value={{ error, signup, login, user, logout }}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider