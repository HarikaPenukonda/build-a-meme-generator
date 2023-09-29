import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
//import Events from "./event-listener/Events";

export default function App(){
    return(
        <div>
            <Header/>
            <Meme/>
            {/* <Events/> */}
        </div>
    )
}