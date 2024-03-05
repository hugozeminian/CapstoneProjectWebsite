{/*
This code defines a context named NavbarHeightContext for managing the navbar height. 
It provides a custom hook called useNavbarHeight to access the context values. 
The context holds the state for the navbar height, 
and a provider component called NavbarHeightProvider is provided to wrap the components that need to access or modify the navbar height state.
 */}

import React, { createContext, useContext, useState } from "react"; // Importing necessary modules from React

// Creating a context for navbar height management
const NavbarHeightContext = createContext();

// Custom hook to use navbar height context
export const useNavbarHeight = () => useContext(NavbarHeightContext);

// Provider component for navbar height context
export const NavbarHeightProvider = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Providing navbar height state and setter function to the context
  return (
    <NavbarHeightContext.Provider value={{ navbarHeight, setNavbarHeight }}>
      {children}
    </NavbarHeightContext.Provider>
  );
};
