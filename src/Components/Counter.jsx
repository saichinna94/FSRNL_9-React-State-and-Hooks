import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
  return (
    <>
    <h3>Counter State Example</h3>
    <p>The State Count Value is {count}</p>
    <button onClick={()=> setCount(e=> e+1)}> ++ </button> &nbsp;
    <button onClick={()=> setCount(e=> e-1)}> -- </button> &nbsp;
    <button onClick={()=> setCount(0)}> Reset </button>
    </>
  )
}

export default Counter
