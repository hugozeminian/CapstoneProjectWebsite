{
  /*
This code defines a context named StateContext for managing application state. 
It provides a context provider component called TokenContext and a custom hook called useStateContext to access the context values. 
The context holds states for the current user, authentication token, and notification message.
The setToken function is provided to set the authentication token, 
and the setNotification function is provided to set the notification message with a timeout.
 */
}

import { createContext, useContext, useEffect, useState } from "react";
import { decryptUserId, encryptUserId } from "../util/generalFunctions";

// Creating a context for state management
const StateContext = createContext({
  currentUser: null,
  token: null,
  notification: null,
  setUser: () => {},
  setToken: () => {},
  setNotification: () => {},
});

// Context provider component
export const TokenContext = ({ children }) => {
  const [user, _setUser] = useState(async () => {
    const encryptedUserId = await localStorage.getItem("user");
    const decryptedUserId = await decryptUserId(encryptedUserId);
    return decryptedUserId;
  });
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
  const [notification, _setNotification] = useState("");

  // Function to set authentication token
  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
      saveDataToLocalStorage();
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("user");
      localStorage.removeItem("tokenTimeBrowser");
    }
  };

  useEffect(() => {
    const initializeUser = async () => {
      try {
        const encryptedUserId = await localStorage.getItem("user");
        if (encryptedUserId) {
          const decryptedUserId = await decryptUserId(encryptedUserId);
          await setUser(decryptedUserId);
        }
      } catch (error) {
        console.error("Error initializing user:", error);
      }
    };

    initializeUser();
  }, [user]);

  const setUser = async ({ id }) => {
    _setUser(id);
    if (id) {
      const _encryptUserId = await encryptUserId(id);
      await localStorage.setItem("user", _encryptUserId);
    }
  };

  // Function to set notification message with timeout
  const setNotification = (message) => {
    _setNotification(message);

    setTimeout(() => {
      _setNotification("");
    }, 5000);
  };

  // Save data to local storage
  const saveDataToLocalStorage = () => {
    localStorage.setItem("tokenTimeBrowser", new Date().getTime());
  };

  // Providing states and setter functions to the context
  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        notification,
        setNotification,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to use the context
export const useStateContext = () => useContext(StateContext);
