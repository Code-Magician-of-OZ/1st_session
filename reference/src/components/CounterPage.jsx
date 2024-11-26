import { useState } from "react";
import "../style/CounterPage.module.css";

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount((prev) => prev + 1);
  const decreaseCount = () => setCount((prev) => prev - 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </div>
  );
};

export default CounterPage;
