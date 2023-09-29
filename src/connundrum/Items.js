import React from "react";

/*
    Challenge 1 : Map over the thingsArray to generate a <p> element for each items 
    and render on the page below the button
*/ 

/*
    Challenge 2 : Add an event listener to the button so when it is clicked, it adds another thing to our array

    Hint : use the array length + 1 to determine the number of the thing being added. Also, have event listener
    console.log(thingsArray) after adding the new item to the array

    Spoiler : the page wont update when new things get added to the array
*/

export default function Items(){
    const thingsArray = ["Thing 1" , "Thing 2"]
    const thingElements = thingsArray.map(data => (
        <p key={data}>{data}</p>
    ))
    function addThings(){
        // wrong approach by me
        // let result = `Thing  ${thingsArray.length + 1}`
        // console.log(result)
        // not so right approach by me
        // let result = (thingsArray.push(`Thing ${thingsArray.length + 1}`))
        // console.log("Thing " + result)
        const newThings = `Thing + ${thingsArray.length + 1}`
        thingsArray.push(newThings)
        console.log(thingsArray)
    
    }
    return(
        <div>
            <button onClick={addThings}>
                Add Item
            </button>
            {thingElements}
        </div>
    )
}