import React from "react";
import boxesData from "./boxes-data";

export default function Box(props){
    const styles = {
        backgroundColor : props.on ? "#222222" : "none" 
    }
    // console.log(props.on)
    return(
        <div 
            className="box"
            style={styles}>
        
        </div>
    )
}