import React, { useState } from "react";

/*
    Challenge 1 : Set up state to tract our count (initial value is 0)
    Challenge 2 : whenever the + button is clicked just console.log("add")
    Challenge 3 : add 1 to the count every time + button is clicked
    Challenge 4 : add - functionality
*/ 

export default function Counter(){ 
    const [count,setCount] =  useState(0)
    function add(){
        setCount(count + 1)
    }
    function sub(){
        setCount(count - 1)
    }
    return(
        <div className="counter">
            <button onClick={sub}>-</button>
            <h3>{count}</h3>
            <button onClick={add}>+</button>
        </div>
    )
}