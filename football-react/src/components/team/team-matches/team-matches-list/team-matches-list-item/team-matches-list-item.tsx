import React from 'react'
import {IMatch} from '../../../../../types/types'

const TeamMatchesListItem:React.FC<{matchesItem:IMatch}> = ({matchesItem}) => {
    let arrOfDate = matchesItem.utcDate.split('Z')[0].split('T');
    return(
        <li className = 'team__matches-list-item'>
            <div className = 'team__matches-list-info'>
                <h4 className = 'team__matches-list-title'>{matchesItem.competition.name}</h4>
                <p className = 'team__matches-list-versus'>{`${matchesItem.homeTeam.name} VS ${matchesItem.awayTeam.name}`}</p>
                <p className = 'team__matches-list-date'>Date: {arrOfDate[0]}</p>
                <p className = 'team__matches-list-time'>Time: {arrOfDate[1]}</p>
            </div>
        </li>
    )
}

export default TeamMatchesListItem