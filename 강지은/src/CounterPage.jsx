
import React, { useState } from 'react';


function CounterPage() {
    const [count, setCount] = useState(0) 
  return (
    <div>
      <div>
        count: {count}
      </div>
      <button onClick={() =>{
      setCount(count +1)
      }}>+</button>
      <button onClick={() =>{
      setCount(count -1)
}}>-</button>
    </div>
  )
}

 export default CounterPage;