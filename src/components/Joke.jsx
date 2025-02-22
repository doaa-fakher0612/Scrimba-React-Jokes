import React from "react";

export default function Joke(props){
    console.log(props)
    return (
        <>
        {
        /* conditional render  if (props.setup) is truthy ? (<h3>Setup: {props.setup}</h3>)will ber rendered
        if falsy => nothing woll be rendered*/}

         {props.setup && <h3>Setup: {props.setup}</h3>}
         <p>punchline: {props.punchline}</p>
         <hr />
        </>
    )
}