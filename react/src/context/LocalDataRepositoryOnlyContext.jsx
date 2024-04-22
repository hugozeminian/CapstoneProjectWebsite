import React, { createContext, useContext, useState } from "react";

/**
 * Context for managing the source of data repository.
 * @type {React.Context<{localDataRepositoryOnly: boolean, setLocalDataRepositoryOnly: React.Dispatch<React.SetStateAction<boolean>>}>}
 */
const LocalDataRepositoryOnlyContext = createContext();

/**
 * Custom hook to access the local data repository context.
 * @returns {{localDataRepositoryOnly: boolean, setLocalDataRepositoryOnly: React.Dispatch<React.SetStateAction<boolean>>}} Data repository source and setter function.
 */
export const useLocalDataRepositoryOnly = () => useContext(LocalDataRepositoryOnlyContext);

/**
 * Provider component for managing the source of data repository.
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - Child components wrapped by the provider.
 * @returns {JSX.Element} Provider component for local data repository context.
 */
export const LocalDataRepositoryOnlyProvider = ({ children }) => {
  // State for managing the source of data repository
  const [localDataRepositoryOnly, setLocalDataRepositoryOnly] = useState(false); // FALSE = SERVER | TRUE = LOCAL

  // Providing data repository source state and setter function to the context
  return (
    <LocalDataRepositoryOnlyContext.Provider
      value={{ localDataRepositoryOnly, setLocalDataRepositoryOnly }}
    >
      {children}
    </LocalDataRepositoryOnlyContext.Provider>
  );
};
