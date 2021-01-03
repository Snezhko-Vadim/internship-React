import React from 'react'
import {Link} from 'react-router-dom'

const HomeBtn = ({iconClassName}) => {
    return(
        <Link className = 'main__home-btn' to = '/'>
            <i className = {iconClassName}></i>
        </Link>
    )
}

export default HomeBtn