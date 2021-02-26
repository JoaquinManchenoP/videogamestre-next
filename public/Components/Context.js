import React, { createContext, useState } from "react";

const navState = true;
const toggleLoading = false;

const initialState = {
  games: [],
  toggleNav: navState,
  loading: toggleLoading,
};

export const Context = createContext();

const Store = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default Store;
