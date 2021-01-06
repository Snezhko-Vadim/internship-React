import React from 'react'
import {Link} from 'react-router-dom'

interface HomeBtn{
    iconClassName: string,
}

const HomeBtn:React.FC<HomeBtn> = ({iconClassName}) => {
    return(
        <Link className = 'main__home-btn' to = '/'>
            <i className = {iconClassName}></i>
        </Link>
    )
}

export default HomeBtn