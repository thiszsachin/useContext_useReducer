import { createContext, useReducer } from "react";
import CountReducer from "./CountReducer";

export const CountContext = createContext();

function Context(props) {
  const initialState = 100;
  const [count, dispatch] = useReducer(CountReducer, initialState);
  return (
    <CountContext.Provider value={{ count, dispatch }}>
      {props.children}
    </CountContext.Provider>
  );
}

export default Context;
