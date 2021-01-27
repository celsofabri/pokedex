import React, { useState, createContext } from 'react';
import initialValues from './initial';

const Context = createContext(initialValues);

const GlobalState = ({ children }) => {
  const [state, setState] = useState(initialValues);

  return (
    <Context.Provider value={{ state, setState }}>
      {children}
    </Context.Provider>
  );
};

export { GlobalState, Context };
