import React, { useState } from "react";

/*
    Challenge : Convert the code below to use an array
    held in state instead of a local variable. Initialize the state array with the same 2 items below.
*/

export default function Items(){
    
    const [state,setState] = useState(["Thing 1","Thing 2"])

    const thingElements = state.map(data => (
        <p key={data}>{data}</p>
    ))
    
    function addThings(){
        setState((prevState) => 
            // spread operator
            [...prevState,`Thing ${prevState.length + 1}`]
        )
    }
    return(
        <div>
            <button onClick={addThings}>
                Add Item
            </button>
            {thingElements}
        </div>
    )
}