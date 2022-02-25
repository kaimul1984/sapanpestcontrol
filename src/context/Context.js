import React, { useState, createContext, useEffect } from "react";

export const Context = createContext();

function ContextProvider(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const controlTopbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlTopbar);
    return () => {
      window.removeEventListener("scroll", controlTopbar);
    };
  }, []);

  const value = { isOpen, setIsOpen, show, setShow };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

export default ContextProvider;
