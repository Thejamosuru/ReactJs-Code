import React, { useReducer } from 'react'

export const UseReducer2 = () => {
    let handle = (currentState,action)=>{
        switch(action.type){
            case 'INCREMENT':
            return currentState + action.payload
            break;
            case 'DECREMENT':
            return currentState - action.payload
            break;
            case 'RESET':
            return  action.payload
            break;
        }
    }
    const [Count, dispatch] = useReducer(handle, 0)
    return (
        <center>
            <h2 className='mt-3 text-warning'>UseReducerHook</h2>
            <h3 className='text-primary'>Count : {Count}</h3>
            <button className='btn btn-warning me-2' onClick={() => { dispatch({type:'INCREMENT',payload:5}) }}>Increment</button>
            <button className='btn btn-danger me-2' onClick={() => { dispatch({type:'DECREMENT',payload:5}) }}>Decrement</button>
            <button className='btn btn-info' onClick={() => { dispatch({type:'RESET',payload:0}) }}>Reset</button>
        </center>
    )
}
