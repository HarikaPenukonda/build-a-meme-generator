import React from "react";

/*
    Challenge : Replace our hard-coded "Yes" on the page with some state initiated with React.useState( )
*/ 

export default function State(){
    const result = React.useState("No")
    console.log(result)
    return(
        <div className="state">
            <h1 className="state--title">Is state important to know</h1>
            <div className="state-value">
                <h1>{result[0]}</h1>
            </div>
        </div>
    )
}