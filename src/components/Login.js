import React from 'react'

import { useDispatch} from "react-redux";
import { login } from '../features/user'

export default function Login() {

    const dispatch = useDispatch();

    return (
        <div>
            <button 
            onClick={ ()=>{
                dispatch(login( { name:"Madhi",age:29, email:"starmadhi@gmail.com"}))
            }}>Login</button>

            
        </div>
    )
}
