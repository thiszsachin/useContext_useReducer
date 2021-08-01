import Counter from "./Counter";
import Context from "./MyContext/CountContext";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Context>
        <h1>Hello CodeSandbox</h1>
        <Counter />
      </Context>
    </div>
  );
}
