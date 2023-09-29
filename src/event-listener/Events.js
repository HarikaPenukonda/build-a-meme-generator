import React from "react";

/*
    Challenge :
        Log something to the console when the mouse hovers over the image 
*/

export default function Events(){
    function handleClick (){
        console.log("I am clicked")
    }

    function moveOver(){
        console.log("someone scrolled on me")
    }
    return(
        <div className="container">
            <img 
                src="./images/troll.png"
                alt=""
                height="150"
                onMouseOver={moveOver}
            />
            <button onClick={handleClick}>click me</button>

        </div>
    )
}