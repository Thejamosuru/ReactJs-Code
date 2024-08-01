import React  from "react";
import "./style.css";
import reactstyle from "./Stylee.module.css"

const Styling = () =>{
    const style = {
        styles:{
            background:"black",
            color:"white",
            width:"200px",
            textAlign:"center"
        }
    }
    return(
        <>
        <h2>Styling</h2>
        <h2 style={{border:"2px solid red",width:"100px",textAlign:"center"}}>Props</h2>
        <h2 style={style.styles}>ListandKeys</h2>
        <h2 className="styling">State</h2>
        <h2 className="styling">Routing</h2>
        <h2 className={reactstyle.stylees}>Style</h2>

        </>
    )
}
export default Styling;