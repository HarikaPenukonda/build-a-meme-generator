import React from "react";

/*
    Challenge :
    - create a meme component
    - Inside the Meme component, render a styled form
    - with our 2 inputs and the button.

*/ 

export default function Header(){
    return(
        <header className="header">
            <img 
                src="./images/troll.png"
                className="header--image"
                alt=""
                />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React COurse - Project 3</h4>
            
        </header>
    )
}