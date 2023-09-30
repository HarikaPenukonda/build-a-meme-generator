import React, { useState } from "react";

export default function ThingsPractice(){
    const [state,setState] = useState(["Thing 1","Thing 2"])

    const thingsElement = state.map(data => 
    <p key={data}>{data}</p>)

    function addItem(){
        setState((prevData) => 
            [...prevData,`Thing ${prevData.length + 1}`])
    }
    return(
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElement}
        </div>
    )
}