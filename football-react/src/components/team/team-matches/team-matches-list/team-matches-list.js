import React from 'react'
import TeamMatchesListItem from './team-matches-list-item'

const TeamMatchesList = ({matches}) => {
    return (
        <ul className = 'team__matches-list'>
            {
                matches.map((matchesItem,index) => {
                    if(matchesItem.status === 'SCHEDULED'){
                        return(
                            <TeamMatchesListItem key = {index} matchesItem = {matchesItem}/>
                        )
                    }
                })
            }
        </ul>
    )
}

export default TeamMatchesList