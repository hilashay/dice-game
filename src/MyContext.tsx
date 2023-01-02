import React, { useContext, useState } from "react";

interface ContextProps {
  range: number;
  setRange: (x: number) => void;
}
export const MyContext = React.createContext<any>(null);

export const MyContextProvider = ({ children }: any) => {
  const [range, setRange] = useState(0);
  return <MyContext.Provider value={{ range, setRange }}>{children}</MyContext.Provider>;
};

export const useRange = () => useContext(MyContext);
