import React from 'react'

const StandingsMatchday:React.FC<{currentMatchday:number}> = ({currentMatchday}) => {
    return(
        <p className = 'standing__current-day'>current matchday: {currentMatchday}</p>
    )
}

export default StandingsMatchday