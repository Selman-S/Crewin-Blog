import { useState } from 'react';
import { createContext } from 'react';


export const OpenContext = createContext();


const OpenContextProvider = ({ children }) => {


  const [open, setOpen] = useState(false);



  return (
    <OpenContext.Provider value={{ open, setOpen}}>
      {children}
    </OpenContext.Provider>
  );
};

export default OpenContextProvider;