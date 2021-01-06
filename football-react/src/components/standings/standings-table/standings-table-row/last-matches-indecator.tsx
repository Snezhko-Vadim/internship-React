import React from 'react'
import { isNull } from 'util'

interface LastMatchesIndecatorProps{
    formItem:string|null
}

const LastMatchesIndecator:React.FC<LastMatchesIndecatorProps> = ({formItem}) => {
    if(formItem === 'W'){
        return(
            <i className = 'standing-table__last-matches-indecator indecator-win fas fa-circle'></i>
        )
    }
    else if(formItem === 'L'){
        return(
            <i className = 'standing-table__last-matches-indecator indecator-lost fas fa-circle'></i>
        )
    }
    else if(formItem === 'D'){
        return(
            <i className = 'standing-table__last-matches-indecator indecator-draw fas fa-circle'></i>
        )
    }
    else{
        return(
            <i className = 'standing-table__last-matches-indecator fas fa-circle'></i>
        )
    }
}

export default LastMatchesIndecator