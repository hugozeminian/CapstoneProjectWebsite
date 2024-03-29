{/*
This code defines a context named StateContext for managing application state. 
It provides a context provider component called TokenContext and a custom hook called useStateContext to access the context values. 
The context holds states for the current user, authentication token, and notification message.
The setToken function is provided to set the authentication token, 
and the setNotification function is provided to set the notification message with a timeout.
 */}

import {createContext, useContext, useState} from "react";

// Creating a context for state management
const StateContext = createContext({
  currentUser: null,
  token: null,
  notification: null,
  setUser: () => {},
  setToken: () => {},
  setNotification: () => {}
})

// Context provider component
export const TokenContext = ({children}) => {
  const [user, setUser] = useState({}); // State for storing current user data
  const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN')); // State for storing authentication token
  const [notification, _setNotification] = useState(''); // State for storing notification message

  // Function to set authentication token
  const setToken = (token) => {
    console.log("🚀 ~ setToken ~ token:", token)
    _setToken(token)
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  }

  // Function to set notification message with timeout
  const setNotification = message => {
    _setNotification(message);

    setTimeout(() => {
      _setNotification('')
    }, 5000)
  }

  // Providing states and setter functions to the context
  return (
    <StateContext.Provider value={{
      user,
      setUser,
      token,
      setToken,
      notification,
      setNotification
    }}>
      {children}
    </StateContext.Provider>
  );
}

// Custom hook to use the context
export const useStateContext = () => useContext(StateContext);
