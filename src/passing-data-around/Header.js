import React from "react";


/*
    Challenge :
        Raise state up a level and pass it down the Header and Body components through props
*/ 

export default function Header(props){
   
    return(
        <header>
            <p>current user : {props.user}</p>
        </header>
    )
}