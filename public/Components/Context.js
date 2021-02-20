import React, { createContext, useState } from "react";

const initialToggle = true;

export const Context = createContext();

const Store = ({ children }) => {
  const [toggleState, setToggleState] = useState(initialToggle);

  return (
    <Context.Provider value={[toggleState, setToggleState]}>
      {children}
    </Context.Provider>
  );
};

export default Store;
