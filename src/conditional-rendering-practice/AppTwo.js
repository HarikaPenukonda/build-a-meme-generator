import React, { useState } from "react";

export default function App(){
    const [messages,setMessages] = useState(["a","b"])

    return(
        <div>
            {messages.length === 0 ? 
                <h1>You are all caught up!</h1> :  
                <h1>you have {messages.length} unread {messages.length === 1 ? "message" : "messages"}!</h1>}
            
            
        </div>
    )
}