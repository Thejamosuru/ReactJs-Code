import React from 'react'
import { CompD } from './CompD'
import { Context } from './UseContextHook'

export const CompB = () => {
  return (
    <div>
        <h2>CompB</h2>
        <Context.Consumer>
            {(value)=> <h2>{value}</h2>}
        </Context.Consumer>
        <CompD/>     
    </div>
  )
}
