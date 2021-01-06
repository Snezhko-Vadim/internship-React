import React from 'react'
import TeamInformationContent from './team-information-content'
import {ITeam} from '../../../types/types'

const TeamInformation:React.FC<{team:ITeam}> = ({team}) => {
    return(
        <div className = 'team__information'>
            <h3 className = 'team__information-title'>Information</h3>
            <TeamInformationContent team = {team}/>
        </div>
    )
}

export default TeamInformation