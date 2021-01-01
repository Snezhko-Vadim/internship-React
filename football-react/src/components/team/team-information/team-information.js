import React from 'react'
import TeamInformationContent from './team-information-content'

const TeamInformation = ({team}) => {
    return(
        <div className = 'team__information'>
            <h3 className = 'team__information-title'>Information</h3>
            <TeamInformationContent team = {team}/>
        </div>
    )
}

export default TeamInformation