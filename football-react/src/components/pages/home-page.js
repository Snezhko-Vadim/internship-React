import React from 'react'
import {Link} from 'react-router-dom'

function HomePage (){
    return(
        <div className='home-page'>
            <h1>Home Page</h1>
            <Link to = '/competitions/'>Select competition</Link>
            <Link to = '/login'>Login</Link>
            <Link to = '/profile'>Profile</Link>
        </div>
    )
}

export default HomePage;