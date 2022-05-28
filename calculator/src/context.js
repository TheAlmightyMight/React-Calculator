import React, { createContext, useReducer } from "react";

const CalcualtorContext = createContext();

export const Context = ({ children }) => {
  return (
    <CalcualtorContext.Provider value={{}}>
      {children}
    </CalcualtorContext.Provider>
  );
};

export default CalcualtorContext;
