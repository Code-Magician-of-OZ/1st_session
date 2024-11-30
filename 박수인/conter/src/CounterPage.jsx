import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </>
  );
}

export default Counter;
