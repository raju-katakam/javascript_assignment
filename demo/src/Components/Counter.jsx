import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter App</h2>
      <h3>Current Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default Counter
