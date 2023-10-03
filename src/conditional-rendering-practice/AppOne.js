import React, { useState } from "react";

export default function App(){
    const [messages,setMessages] = useState(["a","b"])

    return(
        <div>

            {messages.length > 0 && <h1>You have {messages.length} unread messages</h1>}
        </div>
    )
}