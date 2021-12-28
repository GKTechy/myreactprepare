import React, { useContext } from 'react'
import {loginContext} from "./App"

 const User=()=>  {

    const {username} =useContext(loginContext);

        return (
            <div>
                <h2>UserName : {username}</h2>
            </div>
        )
}

export default User
