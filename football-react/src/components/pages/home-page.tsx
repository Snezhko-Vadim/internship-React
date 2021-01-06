import React from 'react'
import {Link} from 'react-router-dom'

const HomePage:React.FC = () => {
    return(
        <div className='home-page'>
            <h1 className = 'main__title'>Football</h1>
            <Link className = 'home-page__btn' to = '/competitions/'>Select competition</Link>
            <Link className = 'home-page__btn' to = '/login'>Login</Link>
            <Link className = 'home-page__btn' to = '/profile'>Profile</Link>
        </div>
    )
}

export default HomePage;