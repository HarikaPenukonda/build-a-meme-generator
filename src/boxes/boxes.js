import React, { useState } from "react";
import boxesData from "./boxes-data";
import Box from "./Box"

export default function Boxes(){

    const[boxes,setBoxes] = useState(boxesData)

    const boxElements = boxes.map(data => (
        <Box
            key={data.id}
            on={data.on}
        />
    ))

    return(
        <main>
            <h1>Boxes will go here</h1>
            {boxElements}
        </main>
    )
}