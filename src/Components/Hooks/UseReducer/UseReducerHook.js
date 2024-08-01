import React, { useReducer } from 'react'

function UseReducerHook() {
    let reducer = (currentState, action) => {
        // console.log(currentState);
        // console.log(action);
        switch(action){
            case 'INCREMENT':
            return currentState + 1
            break;
            case 'DECREMENT':
            return currentState -  1
            break;
            case 'RESET':
            return currentState = 0
            break;
        }
    }

    const [Count, dispatch] = useReducer(reducer, 0)

    return (
        <center>
            <h2 className='mt-3 text-warning'>UseReducerHook</h2>
            <h3 className='text-primary'>Count : {Count}</h3>
            <button className='btn btn-warning me-2' onClick={() => { dispatch('INCREMENT') }}>Increment</button>
            <button className='btn btn-danger me-2' onClick={() => { dispatch('DECREMENT') }}>Decrement</button>
            <button className='btn btn-info' onClick={() => { dispatch('RESET') }}>Reset</button>
        </center>
    )
}

export default UseReducerHook