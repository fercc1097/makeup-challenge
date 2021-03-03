import React, { createContext, useState, useContext } from "react";

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState("ligth");

  const setCurrentTheme = async (value) => {
    console.log(`value`, value);
    setTheme(value);
  };

  return (
    <GlobalContext.Provider
      value={{
        theme,
        setCurrentTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useApp = () => useContext(GlobalContext);
