import React from 'react'

import {fetchStandings} from '../../actions'

import Standings from '../standings'
import BackBtn from '../back-btn'
import RefreshBtn from '../refresh-btn'
import HomeBtn from '../home-btn'


const StandingsPage:React.FC<{idOfCompetition:number}> = ({idOfCompetition}) => {
    return(
        <div className = 'standings-page'>
            <h1 className = 'main__title'>Football</h1>
            <Standings idOfCompetition = {idOfCompetition}/>
            <BackBtn iconClassName = 'fas fa-arrow-left'/>
            <HomeBtn iconClassName = 'fas fa-home'/>
            <RefreshBtn refreshingId = {idOfCompetition} refreshAction = {fetchStandings} iconClassName = 'fas fa-sync-alt'/>
        </div>
    )
}


export default StandingsPage