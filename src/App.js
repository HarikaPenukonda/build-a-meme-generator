import React from "react";
//import { useState } from "react";

// import Header from "./components/Header";
// import Meme from "./components/Meme";
import AppOne from "./conditional-rendering-practice/AppOne"




export default function App(){
    // const[user,setUser] = useState("Joe") 
    return(
        <div>
            {/* <Header/>
            <Meme/> */}
            
            {/* <Header user={user}/>
            <Body user={user}/> */}
            <AppOne/>
            
        </div>
    )
}