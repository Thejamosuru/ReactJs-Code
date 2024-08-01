import React from 'react'

export default function Props_Object(props) {
 
  return (
    <>
    <h2>Props by using array of object</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
          {props.userinfo.map((ele)=>(
          <tr key={ele.id}>
            <td>{ele.id}</td>
            <td>{ele.name}</td>
            <td>{ele.username}</td>
            <td>{ele.email}</td>
          </tr>
          ))}
        </tbody>
    </table>
    </>
  )
}
