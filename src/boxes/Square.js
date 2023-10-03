import React, { useState } from "react";
import Box from "./Box";
import boxdata from "./boxes-data"

export default function Square(){

    const [squares,setSquares] = useState(boxdata)

    function toggle(id){
        
    }

    const squareElements = squares.map(data =>(
        <Box
            key={data.id}
            id={data.id}
            on={data.on}
            handleClick={toggle}
        />
    ))

    return(
        <main>
            {squareElements}
        </main>
    )

}
