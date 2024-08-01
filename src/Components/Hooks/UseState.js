import React, { useState } from 'react'

export default function UseState() {
    let [count,setCount] = useState(0);

  return (
    <center>
        <h1 className='text-danger mt-5'>UseState</h1>
        <h2 className='text-secondary'>Count: {count}</h2>
        <button onClick={()=>{setCount(count+1)}} className='btn btn-primary mx-2'>Increment</button>
        <button onClick={()=>{setCount(count-1)}} className='btn btn-warning mx-2'>Decrement</button>
        <button onClick={()=>{setCount(count=0)}} className='btn btn-danger mx-2'>Reset</button>
    </center>
  )
}
