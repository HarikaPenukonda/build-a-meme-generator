import React from "react";
import jokes from "./jokes-data"
import Joke from "./Joke";

export default function AppJoke(){
    const jokeElements = jokes.map((data)=>{
        return(
            <Joke
            {...data}
        />
        )
        

    })
    return(
        <div>
            {jokeElements}
        </div>
    )
}