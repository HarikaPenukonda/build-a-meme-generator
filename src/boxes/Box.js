import React, { useState } from "react";
import boxesData from "./boxes";

/*
    Challenge part 1 :
        1. Initialize state with default value of the array pulled in from boxes.js
        2. Map over the state array and display each one as an empty square(black border, transparent bg)
*/ 

export default function App(){

    const[boxes,setBoxes] = useState(boxesData)

    const boxElements = boxes.map(data => (
        <div 
            className="box"
            key={data.id}>

        </div>
    ))

    return(
        <main>
            <h1>Boxes will go here</h1>
            {boxElements}
        </main>
    )
}