import React, { useState } from "react";

/*
    Challenge 1 : Fill in the values in the markup using the properties of our state object
*/ 
/*
    Challenge 2 : Use a ternary to determine which star image filename
    should be used based on `contact.isFavourite` property

    `true` => "star-filled.png"
    `false` => "star-empty.png"
*/ 

export default function Contact(){
    const [contact,setContact] = useState({
            firstName : "Jane",
            lastName : "Doe",
            phone : "+1 (321) 456-7899",
            email : "janedoe@gmail.com",
            isFavourite : true
    })

    let starIcon = contact.isFavourite ? 'star-fill.png' : 'star-empty.png'

    function toggleFavourite(){
        setContact(prevState => (
            {
                ...prevState,
                isFavourite : !prevState.isFavourite
            }
           
        ))
        // setContact(prevState => {
        //     // return a object
        //     return{
        //         ...prevState,
        //         isFavourite : !prevState.isFavourite
        //     }
           
        // })
    }

    return(
        <main>
            <article className="card">
            <img src="./images/user.avif" alt="" className="card--image"/>
            <div className="card--info">
                <img src={`../images/${starIcon}`}
                className="card--favourite"
                onClick={toggleFavourite}
                width="30px"
                alt=""
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