import React from 'react';

const CounterPage = ({counter, setCounter}) => {

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
          {counter}
      <button
        onClick={increment}
      >+</button>
      <button
        onClick={decrement}
      >-</button>
    </div>
  );
};

export default CounterPage;