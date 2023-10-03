import React, { useState } from "react";
import Box from "./Box";
import boxdata from "./boxes-data"

export default function Square(){

    const [squares,setSquares] = useState(boxdata)

    function toggle(id){
        setSquares(prevState => {
            return prevState.map((data)=>{
                return data.id === id ? {...data, on : !data.on} : data
            })
        })
    }

    const squareElements = squares.map(data =>(
        <Box
            key={data.id}
            id={data.id}
            on={data.on}
            handleClick={()=>toggle(data.id)}
        />
    ))

    return(
        <main>
            {squareElements}
        </main>
    )

}
