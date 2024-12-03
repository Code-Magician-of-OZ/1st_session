import { useState } from "react";
import "../App.css";

function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="content">
        <div className="count">
          <h1>count : {count}</h1>
        </div>
        <div className="button">
          <button
            className="btn"
            onClick={() => {
              setCount((prev) => prev + 1);
            }}
          >
            +1
          </button>
          <button
            className="btn"
            onClick={() => {
              setCount((prev) => prev - 1);
            }}
          >
            -1
          </button>
        </div>
      </div>
    </>
  );
}
export default CounterPage;
