import React, { useState } from "react";

export default function Joke(props){

   
    // console.log(props)
    const [isShown, setIsShown] = useState(false)
    // console.log(isShown)
    function showPunchline(){
        setIsShown (prevShown => !prevShown)
     
    }
    return (
        <>
        {
          

        /* conditional render  if (props.setup) is truthy ? (<h3>Setup: {props.setup}</h3>)will ber rendered
        if falsy => nothing will be rendered*/}
         {props.setup && <h3>Setup: {props.setup}</h3>}

         {/* {isShown && <p>punchline: {props.punchline}</p>} */}
         {/* ternary operator */}
         {isShown ? <p>punchline: {props.punchline}</p> : null}
         <button onClick={showPunchline}>{!isShown ? "Show Punchline" : "Hide Punchline"}</button>
         <hr />
        </>
    )
}

if (true && console.log("This code is running")) {
    console.log("Everything was true!")
}