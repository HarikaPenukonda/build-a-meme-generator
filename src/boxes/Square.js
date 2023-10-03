import React, { useState } from "react";
import Box from "./Box";
import boxdata from "./boxes-data"

export default function Square(){

    const [squares,setSquares] = useState(boxdata)

    function toggle(id){
        setSquares(prevState => {
            const newSquares = []
            for(let i = 0; i<prevState.length;i++){
                const currentSquare = prevState[i]
                if(currentSquare.id === id){
                    const updatedSquare = {
                        ...currentSquare,
                        on : !currentSquare.on
                    }
                    newSquares.push(updatedSquare)
                }else{
                    newSquares.push(currentSquare)
                }
            }
            return newSquares
        })
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
