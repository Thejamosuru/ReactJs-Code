import React from 'react';
import { info } from './UsersData';
function Transfer() {
  return (
    <>
    <h2>Props export the data in js file and render into current component </h2>
    {info.map((user)=>(
    <ul>
        <li>{user.id}</li>
        <li>{user.name}</li>
        <li>{user.username}</li>
        <li>{user.email}</li>
    </ul>
    ))}
    </>
  )
}

export default Transfer