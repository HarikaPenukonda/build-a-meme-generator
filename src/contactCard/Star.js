import React from "react";

export default function Star(props){
    const starIcon = props.isFilled ? 'star-fill.png' : 'star-empty.png'
    return(
        <img src={`../images/${starIcon}`}
                className="card--favourite"
                width="30px"
                onClick={props.handleClick}
                alt=""
                />
    )
}