import React from 'react'
import TeamInformationSquadItem from './team-information-squad-item'

const TeamInformationSquad = ({squad}) => {
    return(
        <div className = 'team__information-squad'>
            {
                squad.map((squadItem) => {
                    if(squadItem.role === 'PLAYER'){
                        return <TeamInformationSquadItem key = {squadItem.id} squadItem = {squadItem}/>
                    }
                })
            }
        </div>
    )
}

export default TeamInformationSquad