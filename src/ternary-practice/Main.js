import React from "react";

export default function Main(){
    const isGoingOut = false
    
    // use ternary here
    const answer = isGoingOut ? "Yes" : "No"

    // if(isGoingOut === true){
    //     answer = "Yes"
    // }else{
    //     answer = "No"
    // }
    return(
        <div className="state">
            <h1>Do I feel like going out tonight?</h1>
            <h1>{answer}</h1>
        </div>
    )
}