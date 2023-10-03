import React from "react";
import { useState } from "react";

// import Header from "./components/Header";
// import Meme from "./components/Meme";

//import First from "./ternary-practice/First"
//import Main from "./ternary-practice/Main";
//import Counter from "./connundrumResolved/Counter";
//import Events from "./event-listener/Events";
//import Items from "./connundrum/Items";
//import State from "./connundrumResolved/State";
//import Things from "./connundrumResolved/Things"
//import ThingsPractice from "./connundrumResolved/ThingsPractice";
//import Contact from "./contactCard/Contact";
//import Counter2 from "./connundrumResolved/Counter2";
import Header from "./passing-data-around/Header";
import Body from "./passing-data-around/Body";
export default function App(){
    const[user,setUser] = useState("Joe")
    return(
        <div>
            {/* <Header/>
            <Meme/> */}
            {/* <Events/> */}
            {/* <Items/> */}
            {/* <State/> */}
            {/* <Counter/> */}
            {/* <Main/> */}
            {/* <First/> */}
            {/* <Things/> */}
            {/* <ThingsPractice/> */}
            {/* <Contact/> */}
            {/* <Counter2/> */}
            <Header user={user}/>
            <Body user={user}/>
        </div>
    )
}