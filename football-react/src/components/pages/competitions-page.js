import React from 'react'

import {fetchCompetitions} from '../../actions'

import CompetitionsList from '../competitions-list'
import BackBtn from '../back-btn'
import RefreshBtn from '../refresh-btn'
import HomeBtn from '../home-btn'

function CompetitionsPage (){
    return(
        <div className='competitions-page'>
            <h1 className = 'main__title'>Football</h1>
            <CompetitionsList/>
            <BackBtn iconClassName = 'fas fa-arrow-left'/>
            <HomeBtn iconClassName = 'fas fa-home'/>
            <RefreshBtn refreshAction = {fetchCompetitions} iconClassName = 'fas fa-sync-alt'/>
        </div>
    )
}

export default CompetitionsPage;