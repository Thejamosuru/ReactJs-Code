import React from 'react'

export default function PropsInfo(props) {
  return (
    <div>
        <h1 className='text-danger mt-2 mx-3'>Props</h1>
        <h2 className='text-warning mx-4'>String:-{props.strring} </h2>


        <ul >
            <h2 className='text-secondary mx-4'>Array</h2>
            {props.Arraay.map((lang)=>(
            <li className='text-danger mx-5'>{lang}</li>
        ))}
        </ul>


        <h2 className='text-info mx-4'>Object</h2>
        <h3 className='text-secondary mx-5'>HTML :-{props.time.html} days</h3>
        <h3 className='text-secondary mx-5'>CSS :-{props.time.css} days</h3>
        <h3 className='text-secondary mx-5'>Bootstrap :-{props.time.Bootstrap} days</h3>
        <h3 className='text-secondary mx-5'>JavaScript :-{props.time.Javascript} days</h3>
        <h3 className='text-secondary mx-5'>ReactJs :-{props.time.ReactJS} days</h3>


        <h2 className='text-primary mx-4'>Array Of Object</h2>
        <table className='table mx-5'>
            <thead >
                <tr  >
                    <th className='text-warning text-center'>ID</th>
                    <th className='text-warning text-center'>NAME</th>
                    <th className='text-warning text-center'>USERNAME</th>
                    <th className='text-warning text-center'>EMAIL ID</th>
                </tr>
            </thead>
            <tbody>
                {props.OObject.map((userData)=>(
                <tr>
                    <td className='text-info text-center'>{userData.id}</td>
                    <td className='text-info text-center'>{userData.name}</td>
                    <td className='text-info text-center'>{userData.username}</td>
                    <td className='text-info text-center'>{userData.email}</td>
                </tr>
                ))}
            </tbody>           
        </table>
    </div>
  )
}
