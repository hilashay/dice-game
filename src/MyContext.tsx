import React, { useCallback, useContext, useState } from "react";
import { useEffect } from "react";

//typeScript
interface ContextProps {
  range: number;
  setRange: (input: number) => void;
  lastNumber: number;
  setLastNumber: (input: number) => void;
  onDiceResult: any;
  history: any;
  setHistory: (input: number[]) => void;
}

//my context
export const MyContext = React.createContext<ContextProps | null>(null);
//provider
export const MyContextProvider = ({ children }: any) => {
  // global states
  const [range, setRange] = useState<number>(0);
  const [lastNumber, setLastNumber] = useState<number>(0);
  const [history, setHistory] = useState<number[]>([]);

  const onDiceResult = useCallback(
    (number: number) => {
      setHistory((prev): any => [...prev, number]);
      setLastNumber(number);
    },
    [setHistory, setLastNumber]
  );

  return (
    //values of my provider
    <MyContext.Provider
      value={{ range, setRange, lastNumber, setLastNumber, onDiceResult, history, setHistory }}
    >
      {children}
    </MyContext.Provider>
  );
};

//costum hooks use "useContext" (consumer)
export const useRange = () => {
  const { range, setRange } = useContext(MyContext)!;
  return { range, setRange };
};

export const useLastNumber = () => {
  const { lastNumber, setLastNumber } = useContext(MyContext)!;
  return { lastNumber, setLastNumber };
};

export const useOnDiceResult = () => {
  const { onDiceResult } = useContext(MyContext)!;
  return onDiceResult;
};
export const useHistory = () => {
  const { history } = useContext(MyContext)!;
  return history;
};
