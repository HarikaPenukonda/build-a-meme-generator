import React, { useState } from "react";
//import boxesData from "./boxes-data";

export default function Box(props){
    const [mode,setMode] = useState(props.on)
    
    function handleClick(){
        setMode(prevState => !prevState)
    }

    const styles = {
        backgroundColor : mode ? "#222222" : "transparent" 
    }
   
    return(
        <div 
            className="box"
            style={styles}
            onClick={handleClick}>
        </div>
    )
}