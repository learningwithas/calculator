import React, { createContext, useState } from "react";

export const StoreContext = createContext({});

const StoreContextProvider = ({ children }) => {
  const [input, setInput] = useState("0");

  const handleClick = (value) => {
    // console.log(value);
    if (value === "AC") {
      setInput("0");
    } else if (value === "=") {
      calculate();
    } else {
      setInput((prevInput) => {
        return prevInput === "0" ? value : prevInput + value;
      });
    }
  };

  const calculate = () => {
    try {
      const result = eval(input);
      setInput(result);
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <StoreContext.Provider value={{ input, setInput, handleClick }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
