import React, { useState } from "react";
import memedata from "../memesData.js"

/*
    Challenge : Get a random image from the 'memesData array
    When the "new meme image" button is clicked.

    Log the url of the image to the 
*/ 
/*
    Challenge 2 : Save the random meme URL in state 
        - create new state called `memeImage` with an empty String as default
        - When the getMemeImage function is called, update the memeImage state to be the random choose image URL
        - Below the div.form, add an <img/> and set the src to the new `memeImage` state we created.
*/

let url

export default function Meme(){
    const [memeImage,setMemeImage] = useState("")
    
    function getRandomImage(){
        const memeArray = memedata.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        url = memeArray[randomNumber].url
        setMemeImage(url)
        //console.log(url)

    }
    return(
        <main>
            <div className="form">
                <input 
                type="text"
                placeholder="top-text"
                className="form--input"
                />
                <input 
                type="text"
                placeholder="bottom-text"
                className="form--input"
                />
                <button onClick={getRandomImage} className="form--button ">Get a new meme image</button>
                <img 
                    src={memeImage}
                    alt=""
                    className="meme--image"
                    />
            </div>
        </main>
    )
}