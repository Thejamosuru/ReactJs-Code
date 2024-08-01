import React from 'react'
import { Context } from './UseContextHook'

export const CompD = () => {
  return (
    <div>
        <h2>CompD</h2>
        <Context.Consumer>
          {(value)=>value}
        </Context.Consumer>
    </div>
  )
}
