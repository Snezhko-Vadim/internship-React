import React from 'react'
import TeamMatchesList from './team-matches-list'
import {IMatch} from '../../../types/types'

const TeamMatches:React.FC<{matches:Array<IMatch>}> = ({matches}) => {
    return(
        <div className = 'team__matches'>
            <h3 className = 'team__matches-title'>Matches</h3>
            <div className = 'team__matches-content'>
                <TeamMatchesList matches = {matches}/>
            </div>
        </div>
    )
}

export default TeamMatches