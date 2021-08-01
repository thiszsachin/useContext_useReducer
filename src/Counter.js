import { useContext } from "react";
import { DECREMENT, INCREMENT } from "./MyContext/CountActions";
import { CountContext } from "./MyContext/CountContext";

export default function Counter() {
  const { count, dispatch } = useContext(CountContext);
  return (
    <div>
      <h1>Count is: {count}</h1>
      <br />
      <button onClick={() => dispatch(INCREMENT)}>Increment</button>
      <br />
      <br />
      <button onClick={() => dispatch(DECREMENT)}>Decrement</button>
    </div>
  );
}
