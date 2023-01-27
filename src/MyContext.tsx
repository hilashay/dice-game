import React, { useCallback, useContext, useState } from "react";

interface ContextProps {
  range: number;
  setRange: (input: number) => void;
  lastNumber: number;
  setLastNumber: (input: number) => void;
  onDiceResult: any;
  history: any;
  setHistory: (input: number[]) => void;
}
// (number: number) => void;

export const MyContext = React.createContext<ContextProps | null>(null);

export const MyContextProvider = ({ children }: any) => {
  const [range, setRange] = useState<number>(0);
  const [lastNumber, setLastNumber] = useState<number>(0);
  const [history, setHistory] = useState<number[]>([]);

  const onDiceResult = useCallback(
    (number: number) => {
      setHistory((prev): any => [...prev, number]);
      setLastNumber(number);
      console.log("history11", history);
    },
    [setHistory, setLastNumber]
  );

  return (
    <MyContext.Provider
      value={{ range, setRange, lastNumber, setLastNumber, onDiceResult, history, setHistory }}
    >
      {children}
    </MyContext.Provider>
  );
};

// export const useRange = () => {
//   // const x = useContext(MyContext);
//   const x = {range: "", setRange: 4}
//   const height = x.height
//   // const weight = x.weight
//   const {height,weight} = x

//   return {height: height, weight: weight}

//   const { range, setRange } = useContext(MyContext);

//   return { range:range, setRange };
// };  לכתוב הסבר על שני הסינתקטיק שוגר שמתקיימים פה
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
