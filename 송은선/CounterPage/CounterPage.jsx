import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const onDecrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <h1>counter:{count}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>
  );
}
