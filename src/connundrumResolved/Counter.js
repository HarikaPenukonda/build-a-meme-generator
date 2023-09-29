import React, { useState } from "react";

/*
    Challenge 1 : Set up state to tract our count (initial value is 0)
*/ 

export default function Counter(){ 
    const [count,setCount] =  useState(0)
    return(
        <div className="counter">
            <button>-</button>
            <h3>{count}</h3>
            <button>+</button>
        </div>
    )
}