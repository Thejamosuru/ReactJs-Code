import React, { Component } from 'react'

export class Counter extends Component {

    constructor(){
        super()
        this.state = {
            count:0
        }
       }

    increase = () => {
        this.setState({count:this.state.count+1})
     } 

     decrease = () => {
        this.setState({count:this.state.count-1})
     }

     normal = () => {
        this.setState({count:this.state.count=0})
     }

  render() {
    return (
        <>
        <div className='text-center mt-5'>
            <h1 className='text-danger'>Counter App</h1>
            <h2>Conter: {this.state.count}</h2>
            <button className="btn btn-warning mx-2 mt-5" onClick={this.increase}>Increment</button>
            <button className='btn btn-primary mx-2 mt-5' onClick={this.decrease}>Decrement</button>
            <button className='btn btn-danger px-4 mt-5' onClick={this.normal}>Reset</button>
        </div>
        </>
    )
  }
}

export default Counter

