import React from "react";
//import { useState } from "react";

// import Header from "./components/Header";
// import Meme from "./components/Meme";
import AppJoke from "./conditional-rendering/AppJoke"




export default function App(){
    // const[user,setUser] = useState("Joe") 
    return(
        <div>
            {/* <Header/>
            <Meme/> */}
            
            {/* <Header user={user}/>
            <Body user={user}/> */}
            {/* <AppOne/> */}
            <AppJoke/>
            
        </div>
    )
}