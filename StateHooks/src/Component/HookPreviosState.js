import React, { useState } from 'react'

function HookPreviosState() {
    const initial = 0
    const [count, setCount] = useState(initial)
  return (
    <div>
      <h1>Count Value : {count}</h1>
      <button onClick={()=> setCount(initial)}>Reset</button><br/>
      <button onClick={()=> setCount(count+1)}>Increment</button><br/>
      <button onClick={()=> setCount(count-1)}>Decrement</button><br/>
      </div>
  )
}

export default HookPreviosState
