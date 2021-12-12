import React, { useState, createContext } from "react";

export const Context = createContext();

function ContextProvider(props) {
  const [isOpen, setIsOpen] = useState(false);

  const value = { isOpen, setIsOpen };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

export default ContextProvider;
