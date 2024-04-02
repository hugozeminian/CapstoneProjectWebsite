import React, { createContext, useContext, useState } from "react";

// Creating a context for navbar height management
const LocalDataRepositoryOnlyContext = createContext();

// Custom hook to use navbar height context
export const useLocalDataRepositoryOnly = () => useContext(LocalDataRepositoryOnlyContext);

// Provider component for navbar height context
export const LocalDataRepositoryOnlyProvider = ({ children }) => {
  const [localDataRepositoryOnly, setLocalDataRepositoryOnly] = useState(false); //FALSE = SERVER | TRUE = LOCAL

  // Providing navbar height state and setter function to the context
  return (
    <LocalDataRepositoryOnlyContext.Provider
      value={{ localDataRepositoryOnly, setLocalDataRepositoryOnly }}
    >
      {children}
    </LocalDataRepositoryOnlyContext.Provider>
  );
};
