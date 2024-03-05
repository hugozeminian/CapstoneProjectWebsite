{/*
This code defines a context named FooterHeightContext for managing the footer height. 
It provides a custom hook called useFooterHeight to access the context values. 
The context holds the state for the footer height, 
and a provider component called FooterHeightProvider is provided to wrap the components that need to access or modify the footer height state.
*/}

import React, { createContext, useContext, useState } from "react";

// Creating a context for footer height management
const FooterHeightContext = createContext();

// Custom hook to use footer height context
export const useFooterHeight = () => useContext(FooterHeightContext);

// Provider component for footer height context
export const FooterHeightProvider = ({ children }) => {
  const [footerHeight, setFooterHeight] = useState(0); // State for storing footer height

// Providing footer height state and setter function to the context
  return (
    <FooterHeightContext.Provider value={{ footerHeight, setFooterHeight }}>
      {children}
    </FooterHeightContext.Provider>
  );
};
