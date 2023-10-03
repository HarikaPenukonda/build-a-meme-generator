import React from "react";
//import boxesData from "./boxes-data";

export default function Box(props){
    //console.log(props.id)
    const styles = {
        backgroundColor : props.on ? "#222222" : "transparent" 
    }
   
    return(
        <div 
            className="box"
            style={styles}
            onClick={()=>props.handleClick(props.id)}
            >
        </div>
    )
}