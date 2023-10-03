import React, { useState } from "react";
import Box from "./Box";
import boxdata from "./boxes-data"

export default function Square(){

    const [squares,setSquares] = useState(boxdata)

    const squareElements = squares.map(data =>(
        <Box
            key={data.id}
            on={data.on}
        />
    ))

    return(
        <main>
            {squareElements}
        </main>
    )

}
