import React from 'react'
import TeamInformationSquadItem from './team-information-squad-item'
import {IPlayer} from '../../../../../types/types'

const TeamInformationSquad:React.FC<{squad:Array<IPlayer>}> = ({squad}) => {
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