import React from 'react'
import { useParams } from 'react-router-dom';
function Profile() {
    let {username}=useParams();

    return (
        <div>
            <h1>Profile Page for {username}</h1>
        </div>
    )
}

export default Profile
