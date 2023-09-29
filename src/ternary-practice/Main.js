import React from "react";

/*
    Challenge 1 : move our ternary directly inside of our JSX
    so that "Yes" and "No" are determined inside the <h1>

*/

export default function Main(){
    const isGoingOut = true
    //const answer = isGoingOut ? "Yes" : "No" // use ternary here
    return(
        <div className="state">
            <h1>Do I feel like going out tonight?</h1>
            <h1>{isGoingOut ? "Yes" : "No"}</h1>
        </div>
    )
}