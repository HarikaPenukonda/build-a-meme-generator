import React, { useState } from "react";


export default function Joke(props){

    const [isShown,setIsShown] = useState(false)

    function toggle(){
        setIsShown(prevState => !prevState)
    }

    return(
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {/* <p>{props.punchline}</p> */}
            {/* conditional rendering  */}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggle}>{isShown ? "Hide" : "Show"} punchline!</button> 
            <hr/>
        </div>
    )
}