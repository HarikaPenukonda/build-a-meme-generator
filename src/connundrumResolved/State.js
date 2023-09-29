import React from "react";

/*
    Challenge : Replace our hard-coded "Yes" on the page with some state initiated with React.useState( )
*/ 

/*
    Challenge 2 : Create a function called `handleClick that runs setIsImportant("No")
        - add a click event listener to the div.state-value that runs `handleClick` when the div is clicked
*/

export default function State(){
    const [isImportant,setIsImportant] = React.useState("Yes")

    function handleClick(){
        setIsImportant("No")
    }
    
    return(
        <div className="state">
            <h1 className="state--title">Is state important to know</h1>
            <div className="state-value">
                <h1 onClick={handleClick}>{isImportant}</h1>
            </div>
        </div>
    )
}