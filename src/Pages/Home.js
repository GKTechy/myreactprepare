import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {

    let navigate= useNavigate();
    
    return (
        <div>
            <h1>This is Home page</h1>
            <button onClick={ ()=>{
                navigate("/about")  
            }}>Go to About Page</button>
        </div>
    )
}

export default Home
