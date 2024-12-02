import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterPage from "../CounterPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterPage />
    </>
  );
}

export default App;
