import React, { useState } from "react";

/*
    Challenge 1 : Fill in the values in the markup using the properties of our state object
*/ 

export default function Contact(){
    const [contact,setContact] = useState({
            firstName : "Jane",
            lastName : "Doe",
            phone : "+1 (321) 456-7899",
            email : "janedoe@gmail.com",
            isFavourite : false
    })

    function toggleFavourite(){
        console.log("Toggle Favourite")
    }

    return(
        <main>
            <article className="card">
            <img src="./images/user.avif" alt="" className="card--image"/>
            <div className="card--info">
                <img src={`../images/star-empty.png`}
                className="card--favourite"
                onClick={toggleFavourite}
                width="30px"
                />
            <h2 className="card--name">
                {contact.firstName} {contact.lastName}
            </h2>
            <p className="card--contact">{contact.phone}</p>
            <p className="card--contact">{contact.email}</p>
            </div>
            </article>
        </main>
    )
}