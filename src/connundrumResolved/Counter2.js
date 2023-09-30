import React, { useState } from "react";
import Count from "./Count"

export default function Counter(){ 
    const [count,setCount] =  useState(0)
    function add(){
        setCount(prevCount => prevCount + 1)
    }
    function sub(){
        setCount(prevCount => prevCount - 1)
    }
    return(
        <div className="counter">
            <button onClick={sub}>-</button>
            <Count
                number={count}
            />
            <button onClick={add}>+</button>
        </div>
    )
}