import React,{useState} from "react";

const StateTutorial=()=>{

    const [counter,setCounter]=useState(0);
    const [showText,setShowText]=useState(false)
    const  increment=()=>{
        setCounter(counter+1)
        setShowText(true)
    }
    return (
        <div>
            <h1>use State</h1>
            <h3>{counter}</h3>
            <button onClick={increment}> increment</button>
            {showText && <p>this is the Text</p>}
        </div>
    )
}
export default StateTutorial;