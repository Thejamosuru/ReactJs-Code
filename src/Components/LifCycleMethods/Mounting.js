import React, { Component } from 'react'

export default class Mounting extends Component {
    //-----Constructor-----
    constructor(){
        super()
        console.log("Constructor Executed")
    }
    //-----Static GetDerivedStateFromProps-----
    state = {
        data : []
    }
    static getDerivedStateFromProps(){
        console.log('Static getDerivedSateFromProps executed')
        return null;
    }
    //-----Component DidMount-----
    componentDidMount(){
        this.PersonDetails()
    }

    PersonDetails = async ()=>{
        let info = await fetch('https://jsonplaceholder.typicode.com/users');
        let details = await info.json()
        this.setState({data:details})
    }
    
  render() {
    return (
      <>
      <h2 className='text-center m-3'>Mounting</h2>
      <table className='table border-info text-center' border="2">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email ID</th>
            </tr>
        </thead>
        <tbody>
            {this.state.data && this.state.data.length>0 ? this.state.data.map((usersData)=>(
            <tr>
                <td>{usersData.id}</td>
                <td>{usersData.name}</td>
                <td>{usersData.username}</td>
                <td>{usersData.email}</td>
            </tr>
            )):<h1>Loading...</h1>}
        </tbody>
      </table>
      </>
    )
  }
}
