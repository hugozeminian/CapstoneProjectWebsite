import React, { createContext, useContext, useState } from "react";

/**
 * Context for managing the navbar height.
 * @type {React.Context<{navbarHeight: number, setNavbarHeight: React.Dispatch<React.SetStateAction<number>>}>}
 */
const NavbarHeightContext = createContext();

/**
 * Custom hook to access the navbar height context.
 * @returns {{navbarHeight: number, setNavbarHeight: React.Dispatch<React.SetStateAction<number>>}} Navbar height and setter function.
 */
export const useNavbarHeight = () => useContext(NavbarHeightContext);

/**
 * Provider component for managing the navbar height context.
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - Child components wrapped by the provider.
 * @returns {JSX.Element} Provider component for navbar height context.
 */
export const NavbarHeightProvider = ({ children }) => {
  // State for managing the navbar height
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Providing navbar height state and setter function to the context
  return (
    <NavbarHeightContext.Provider value={{ navbarHeight, setNavbarHeight }}>
      {children}
    </NavbarHeightContext.Provider>
  );
};
