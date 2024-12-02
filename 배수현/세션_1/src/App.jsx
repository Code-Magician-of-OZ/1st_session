import { useState } from 'react'
import './App.css'
import CounterPage from './CounterPage'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <CounterPage counter={counter} setCounter={setCounter} />
    </>
  )
}

export default App
