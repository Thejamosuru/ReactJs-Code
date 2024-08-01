import React from 'react'
import { CompB } from './CompB'
import { Context } from './UseContextHook'


export const CompA = () => {
  return (
    <div>
        <h2>CompA</h2>
        <Context.Consumer>
            {(value)=> value}
        </Context.Consumer>
        <CompB/>
    </div>
  )
}
