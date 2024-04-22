import { createContext, useContext, useEffect, useState } from "react";
import { decryptUserId, encryptUserId } from "../util/generalFunctions";

/**
 * Context for managing state.
 * @type {React.Context<{
 *   user: string | null,
 *   setUser: (user: string) => void,
 *   token: string | null,
 *   setToken: (token: string) => void,
 *   notification: string | null,
 *   setNotification: (notification: string) => void
 * }>}
 */
const StateContext = createContext({
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
  notification: null,
  setNotification: () => {},
});

/**
 * Provider component for managing state context.
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - Child components wrapped by the provider.
 * @returns {JSX.Element} Provider component for state context.
 */
export const TokenContext = ({ children }) => {
  // State for user
  const [user, _setUser] = useState(null);
  // State for token
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
  // State for notification
  const [notification, _setNotification] = useState(null);

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
    // Initialize user state
    const initializeUser = async () => {
      try {
        const encryptedUserId = await localStorage.getItem("user");
        if (encryptedUserId) {
          const decryptedUserId = await decryptUserId(encryptedUserId);
          setUser(decryptedUserId);
        }
      } catch (error) {
        console.error("Error initializing user:", error);
      }
    };

    initializeUser();
  }, []);

  // Function to set user state
  const setUser = async ({id}) => {
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
      _setNotification(null);
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

/**
 * Custom hook to use the state context.
 * @returns {{
 *   user: string | null,
 *   setUser: (user: string) => void,
 *   token: string | null,
 *   setToken: (token: string) => void,
 *   notification: string | null,
 *   setNotification: (notification: string) => void
 * }} State and setter functions.
 */
export const useStateContext = () => useContext(StateContext);
