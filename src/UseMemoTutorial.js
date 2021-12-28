import React, { useState, useMemo } from 'react'
import axios from 'axios'
const UseMemoTutorial =()=>{

    const [data,setData]=useState([]);
    const [toggle,setToggle]= useState(false);

    useState( ()=>{

        axios.get("https://jsonplaceholder.typicode.com/comments").then( (res)=>{
           // console.log("response ->"+JSON.stringify(res.data))
            setData(res.data)
            console.log("api called")
        })

    },[] )

    const findLongestName = (comments)=>{
        if(!comments) return null;

        let longestName="";
        for(let i=0; i<comments.length; i++){
            let currentName=comments[i].name;
            if(currentName.length > longestName.length){
                longestName=currentName;
            }
        }
        console.log("Calling findLongestName")
        return longestName;
    }

    const getLongestName= useMemo( ()=> findLongestName(data) ,[toggle]);

        return (
            <div>
                    <h1>UseMemoTutorial</h1>
                    <p>{getLongestName}</p>
                    <button onClick={ () => setToggle(!toggle)}>Toogle</button>
                    { toggle &&<p>Toggle Text</p> }
            </div>
        )

}

export default UseMemoTutorial
