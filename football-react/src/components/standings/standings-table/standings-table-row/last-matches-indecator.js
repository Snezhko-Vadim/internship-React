import React from 'react'

const LastMatchesIndecator = ({formItem}) => {
    if(formItem === 'W'){
        return(
            <i className = 'standing-table__last-matches-indecator indecator-win'></i>
        )
    }
    else if(formItem === 'L'){
        return(
            <i className = 'standing-table__last-matches-indecator indecator-lost'></i>
        )
    }
    else if(formItem === 'D'){
        return(
            <i className = 'standing-table__last-matches-indecator indecator-draw'></i>
        )
    }
    else if(!formItem){
        return(
            <i className = 'standing-table__last-matches-indecator'></i>
        )
    }
}

export default LastMatchesIndecator