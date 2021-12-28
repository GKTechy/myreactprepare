import React, { useContext } from 'react'
import {loginContext} from "./App"

const Login =()=> {

    const {setUsername} =useContext(loginContext);

        return (
            <div>
                    <input onChange={(e)=>setUsername(e.target.value)}/>
            </div>
        )
}

export default Login
