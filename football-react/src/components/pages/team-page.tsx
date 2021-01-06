import React from 'react'
import Team from '../team'
import BackBtn from '../back-btn'
import RefreshBtn from '../refresh-btn'
import HomeBtn from '../home-btn'

import {fetchTeam} from '../../actions'

const TeamPage:React.FC<{teamId:number}> = ({teamId}) => {
    return(
        <div className = 'team-page'>
            <h1 className = 'main__title'>Football</h1>
            <Team teamId = {teamId}/>
            <BackBtn iconClassName = 'fas fa-arrow-left'/>
            <HomeBtn iconClassName = 'fas fa-home'/>
            <RefreshBtn refreshingId = {teamId} refreshAction = {fetchTeam} iconClassName = 'fas fa-sync-alt'/>
        </div>
    )
}

export default TeamPage