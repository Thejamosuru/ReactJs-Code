import React from 'react'
import { CompA } from './CompA';

export let Context = React.createContext();
export const UseContextHook = () => {
    return (
        <center className='mt-3'>
            <h2>UseContextHook</h2>
            <Context.Provider value='ReactJS'>
                <CompA />
            </Context.Provider>
        </center>
    )
}
