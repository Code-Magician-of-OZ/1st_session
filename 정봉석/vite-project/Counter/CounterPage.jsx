import App from "../src/App";
import { useState } from "react";

export default function Counter() {
  const [counter, setcounter] = useState(0);
  const increase = () => {
    setcounter(counter + 1);
  };
  const decrease = () => {
    setcounter(counter - 1);
  };
  return (
    <>
      <div>Counter : {counter}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  );
}
