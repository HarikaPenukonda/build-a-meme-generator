import React from "react";

export default function Events(){
    function handleClick (){
        console.log("I am clicked")
    }
    return(
        <div className="container">
            <img 
                src="./images/troll.png"
                alt=""
                height="150"
            />
            <button onClick={handleClick}>click me</button>

        </div>
    )
}