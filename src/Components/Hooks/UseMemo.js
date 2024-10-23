import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

export default function UseMemo() {

    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        setCount(count + 1)
    }, [count])

    return (
        <center>
            <h2>UseCallbackHook</h2>
            <p>Count: {count}</p>
            <ChildComponent handleClick={handleClick} />
        </center>
    )
}

export function ChildComponent({ handleClick }) {
    return(
        <button className='btn btn-primary'onClick={handleClick}>Increment</button>
    ) 
}
