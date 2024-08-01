import React from "react"

function Props(props){
    return(
    <>
    <h2>Props by using string and array</h2>
    <p>Props is used to transfer the data from {props.continue}</p>
    <ul>
        {props.Extension.map((ele)=>(
        <li> Language {ele}</li>
    ))}
    </ul>
    </>
    )
}
export default Props;