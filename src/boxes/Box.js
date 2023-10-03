import React, { useState } from "react";
import boxesData from "./boxes";

/*
    Challenge part 1 :
        1. Initialize state with default value of the array pulled in from boxes.js
        2. Map over the state array and display each one as an empty square(black border, transparent bg)
*/ 
/*
    Challenge part 2 : use a ternary determine the background color
    If darkMode is true, set it to #222222 if false set it to #cccccc

*/ 
export default function Box(props){

    const[boxes,setBoxes] = useState(boxesData)

    const styles = {
        backgroundColor : props.darkMode ? "#222222" : "#cccccc" 
    }

    const boxElements = boxes.map(data => (
        <div 
            className="box"
            key={data.id}
            style={styles}>

        </div>
    ))

    return(
        <main>
            <h1>Boxes will go here</h1>
            {boxElements}
        </main>
    )
}