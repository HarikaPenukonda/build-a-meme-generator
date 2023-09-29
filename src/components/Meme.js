import React from "react";
import memedata from "../memesData.js"

/*
    Challenge : Get a random image from the 'memesData array
    When the "new meme image" button is clicked.

    Log the url of the image to the 
*/ 

let url

export default function Meme(){
    function getRandomImage(){
        // const id = Math.floor(Math.random()*100)
        // const url = memedata.data.memes[id].url
        // console.log(url)
        const memeArray = memedata.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        url = memeArray[randomNumber].url
        console.log(url)

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
                <h4>{url}</h4>
            </div>
        </main>
    )
}