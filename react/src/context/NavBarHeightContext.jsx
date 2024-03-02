import React, { createContext, useContext, useState } from "react";

const NavbarHeightContext = createContext();

export const useNavbarHeight = () => useContext(NavbarHeightContext);

export const NavbarHeightProvider = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <NavbarHeightContext.Provider value={{ navbarHeight, setNavbarHeight }}>
      {children}
    </NavbarHeightContext.Provider>
  );
};
