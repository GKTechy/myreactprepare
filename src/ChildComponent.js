import React, { useState,forwardRef, useImperativeHandle } from 'react'

const ChildComponent = forwardRef((props, ref)=> {

    const [toogle, setToggle]=useState(true);

    const clickToggle=()=>{
        setToggle (!toogle)
    }
    useImperativeHandle (ref,()=>({
        clickToggle
    }),[])

        return (
            <div>
                <h3>Child Compoenent</h3>
                <button onClick={ ()=>{
                    setToggle (!toogle)
                }}>Child Component Button</button>
                { toogle && <p> Toogle Text Showing</p>}

            </div>
        )
})

export default ChildComponent
