import React from "react";

/*
    Challenge : Map over the thingsArray to generate a <p> element for each items 
    and render on the page below the button
*/ 

export default function Items(){
    const thingsArray = ["Thing 1" , "Thing 2"]
    const thingElements = thingsArray.map(data => (
        <p key={data}>{data}</p>
    ))
    return(
        <div>
            <button>
                Add Item
            </button>
            {thingElements}
        </div>
    )
}