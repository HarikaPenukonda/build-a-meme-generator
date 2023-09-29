import React, { useState } from "react";

/*
    Challenge 2 : 
        - Initialize state for `isGoingOut` as a boolean
        - Make it so clicking the div.state--value flips that boolean value (true -> false, false->true)
        - Display "Yes " is `isGoingOut` is `true`, "No" otherwise
*/ 

export default function Main(){
    const [isGoingOut,setIsGoingOut] = useState(true)

    function handleChange(){
        setIsGoingOut(prevState => !prevState)
        //console.log("clicked")
    }
    return(
        <div className="state">
            <h1 onClick={handleChange}>Do I feel like going out tonight?</h1>
            <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
        </div>
    )
}