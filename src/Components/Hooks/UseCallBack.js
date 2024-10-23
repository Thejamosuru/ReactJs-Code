import React, { useCallback, useMemo, useState } from 'react'

export default function UseCallBack() {
    let [count,setcount] = useState(0);
    let data = useMemo(()=>{
        return count*2;
    },[count])
  return (
    <center>
      <h1>UseMemo Hook</h1>
    <h2 className='text-center mt-3 text-primary' >Count: {count}</h2>
    <h2 className='text-center mt-3 text-secondary'>Multiply Count*2 = {data}</h2>
    <button className='btn btn-primary mx-2' onClick={()=>{setcount(count+1)}}>Increment</button>
    <button className='btn btn-info mx-2' onClick={()=>{setcount(count-1)}}>Decrement</button>
    <button className='btn btn-danger mx-2' onClick={()=>{setcount(0)}}>Reset</button>
    </center>
  )
}
