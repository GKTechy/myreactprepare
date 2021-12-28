import React, { useEffect ,useState} from 'react'
import axios  from 'axios'

const UseEffectTutorial =()=>{

    const [data,setData]=useState("");
    const [counter,setCounter]=useState(0)

    useEffect( ()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then( (res)=>{
           // console.log("response ->"+JSON.stringify(res.data))
            setData(res.data[0].email)
            console.log("api called")
        })
    },[]) ;

    useEffect( ()=>{
        console.log("clicking the increment ")   
        setData (data + counter)
    },[counter])
    return(
        <div>
            <h1>Use Effect</h1>
            <p>{data}</p>
            <h4>{counter}</h4>
            <button onClick={ ()=>{
                setCounter(counter+1)
            }}>Increment</button>
        </div>
    )
}

export default UseEffectTutorial;
