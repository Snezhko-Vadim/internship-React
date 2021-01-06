import React from 'react'
import TeamInformationListItem from './team-information-list-item'
import TeamInformationSquad from './team-information-squad'
import {ITeam} from '../../../../types/types'

const TeamInformationContent:React.FC<{team:ITeam}> = ({team}) => {
    return(
        <div className = 'team__information-content'>
            <div className = 'team__information-item'>
                <p className = 'team__information-name'>TAKES PART IN COMPETITIONS:</p>
                <ul className = 'team__information-list'>
                    {
                        team.activeCompetitions.map((comp,index) => {
                            return <TeamInformationListItem key = {index} nameOfCompetition = {comp.name}/>
                        })
                    }
                </ul>
            </div>
            <div className = 'team__information-item'>
                <p className = 'team__information-name'>founded in:</p>
                <p className = 'team__information-text'>{team.founded}</p>
            </div>
            <div className = 'team__information-item'>
                <p className = 'team__information-name'>short name:</p>
                <p className = 'team__information-text'>{team.shortName}</p>
            </div>
            <div className = 'team__information-item'>
                <p className = 'team__information-name'>address:</p>
                <p className = 'team__information-text'>{team.address}</p>
            </div>
            <div className = 'team__information-item'>
                <p className = 'team__information-name'>email:</p>
                <p className = 'team__information-text'>{team.email}</p>
            </div>
            <div className = 'team__information-item'>
                <p className = 'team__information-name'>phone:</p>
                <p className = 'team__information-text'>{team.phone}</p>
            </div>
            <div className = 'team__information-item'>
                <p className = 'team__information-name'>squad:</p>
                <TeamInformationSquad squad = {team.squad}/>
            </div>
        </div>
    )
}

export default TeamInformationContent