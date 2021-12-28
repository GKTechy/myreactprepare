import React, { useReducer } from 'react'

const reducer =(state,action)=>{

    switch(action.type){
        case "INCREMENT":
            return { counter: state.counter+1 , showText: state.showText}
        case "SHOWTEXT":
            return {counter: state.counter, showText: !state.showText}
        default:
            return state;
    }

}
const UserReducerTutorial=()=>{
    const [state,dispatch]=useReducer (reducer, {counter:0,showText:false})

    return (
        <div>
            <h1>Use Reducer</h1>
            <h3>{state.counter}</h3>
            <button 
            onClick={ ()=>{
                dispatch( { type:"INCREMENT"})
                dispatch( { type: "SHOWTEXT"}) 
            }}>Increment</button>
            { state.showText && <p> Show Text Values</p>}
        </div>
    )
}

export default UserReducerTutorial
