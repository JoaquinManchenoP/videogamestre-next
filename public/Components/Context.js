import React, { createContext, useState } from "react";

const initialToggle = true;

export const Context = createContext();

const Store = ({ children }) => {
  const [toggleState, setToggleState] = useState(initialToggle);
  const [loading, setLoading] = useState(false);

  return (
    <Context.Provider
      value={([toggleState, setToggleState], [loading, setLoading])}
    >
      {children}
    </Context.Provider>
  );
};

export default Store;
