import React, { createContext, useContext, useState } from "react";

const FooterHeightContext = createContext();

export const useFooterHeight = () => useContext(FooterHeightContext);

export const FooterHeightProvider = ({ children }) => {
  const [footerHeight, setFooterHeight] = useState(0);

  return (
    <FooterHeightContext.Provider value={{ footerHeight, setFooterHeight }}>
      {children}
    </FooterHeightContext.Provider>
  );
};
