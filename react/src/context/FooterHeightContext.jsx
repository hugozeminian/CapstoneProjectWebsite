import React, { createContext, useContext, useState } from "react";

/**
 * Context for managing footer height.
 * @type {React.Context<{footerHeight: number, setFooterHeight: React.Dispatch<React.SetStateAction<number>>}>}
 */
const FooterHeightContext = createContext();

/**
 * Custom hook to access the footer height context.
 * @returns {{footerHeight: number, setFooterHeight: React.Dispatch<React.SetStateAction<number>>}} Footer height and setter function.
 */
export const useFooterHeight = () => useContext(FooterHeightContext);

/**
 * Provider component for managing footer height.
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - Child components wrapped by the provider.
 * @returns {JSX.Element} Provider component for footer height context.
 */
export const FooterHeightProvider = ({ children }) => {
  // State for storing footer height
  const [footerHeight, setFooterHeight] = useState(0);

  // Providing footer height state and setter function to the context
  return (
    <FooterHeightContext.Provider value={{ footerHeight, setFooterHeight }}>
      {children}
    </FooterHeightContext.Provider>
  );
};
