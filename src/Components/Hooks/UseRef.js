import React, { useRef } from 'react'

export const UseRef = () => {
  let data = useRef()

  const sublitform = ()=>{
    console.log(data.current.value);
  }
  return (
    <center className='mt-5'>
        <input ref={data} type='text' placeholder='Enter Name'/>
        <button onClick={sublitform}>Submit</button>
    </center>
  )
}
