import React, { useState } from "react";

/*
    Challenge 1 : Set up state to tract our count (initial value is 0)
    Challenge 2 : whenever the + button is clicked just console.log("add")
    Challenge 3 : add 1 to the count every time + button is clicked
    Challenge 4 : add - functionality
    why do we need to use callback function in setCount function
                function sub(){
                setCount(count - 1)
            }
                Not good practice
        - whenever we need to use our old version of state to determine our new version of state
        - when we provide a callback function as the parameter to our set function this function returns
        the new value we want to state to be.
        - Anytime we need to use our old state value to determine a new state value if we provide this function
        react will pass this function, the old value as the parameter 

        Note - If we ever need the old value of state to help us determine the new value of state, we should 
        pass a callback function to our state setter function instead of using the state directly. This callback
        function will recieve the old value of state as its parameter, which we can then use to determine our new value of state.
        

*/ 

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
            <h3>{count}</h3>
            <button onClick={add}>+</button>
        </div>
    )
}