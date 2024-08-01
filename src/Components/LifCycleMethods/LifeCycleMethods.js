import React, { Component } from 'react'

export default class LifeCycleMethods extends Component {
  render() {
    return (
      <>
      <dl>
        <dt><h2 className='text-danger'>Life Cycle Methods</h2></dt>
        <dl>
            <dt><h3 className='text-info'>Mounting:-An instance of component is being created render into the DOM</h3></dt>
            <dd className='text-sucess ms-3'>Constructor:- A special component that will get called whenever new component is created</dd>
            <dd className='text-sucess ms-3'>Static getDerivedStateFromProps</dd>
            <dd className='text-sucess ms-3'>return</dd>
            <dd className='text-sucess ms-3'>ComponentDidMount</dd>
        </dl>
        <dl>
            <dt><h3 className='text-info'>Updating</h3></dt>
        </dl>
        <dl>
            <dt><h3 className='text-info'>Un-Mounting</h3></dt>
        </dl>
      </dl>
      </>
    )
  }
}
