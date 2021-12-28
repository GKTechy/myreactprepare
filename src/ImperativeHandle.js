import React, { useRef } from 'react'
import ChildComponent from './ChildComponent'

const ImperativeHandle =()=>{
    
    const btnRef = useRef(null);

    const parentClick =()=>{
        console.log("parent call working")
        btnRef.current.clickToggle();
    }
    return (
            <div>   
                <h1>ImperativeHandle</h1>
                <button onClick={parentClick}>Parent Component Button</button>
                <ChildComponent  ref={btnRef}/>
            </div>
        )
    }

export default ImperativeHandle
