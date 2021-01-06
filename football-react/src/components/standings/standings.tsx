import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import StandingsNav from './standings-nav'
import StandingsTable from './standings-table'
import StandingsMatchday from './standings-matchday'
import Preloader from '../preloader'
import ErrorIndicator from '../error-indecator'
import { fetchStandings } from '../../actions'
import {ICurrentStandings} from '../../types/types'
import {appStateType} from '../../store'
import { Dispatch } from 'react'

interface StandingsProps{
    isLoading: boolean,
    error: any,
    selectedTypeOfStandingsTable: string,
    currentStandings: ICurrentStandings,
    idOfCompetition: number,
    fetchStandings: (competitionId:number) => void,
}

const Standings:React.FC<StandingsProps> = ({isLoading, error, selectedTypeOfStandingsTable, currentStandings, idOfCompetition, fetchStandings}) => {

    useEffect(()=>{
        fetchStandings(idOfCompetition)
    },[])

    if(isLoading){
        return(
            <Preloader/>
        )
    }

    if(error){
        return(
            <ErrorIndicator/>
        )
    }

    return(
        <div className = 'standing'>
            <h2 className = 'standing__title'>
                {
                    currentStandings.competition.name
                }
            </h2>
            <div className = 'standing__info'>
                <StandingsMatchday currentMatchday = {currentStandings.season.currentMatchday}/>
                <StandingsNav/>
            </div>
            <div className = 'standing__tables'>
                {
                    currentStandings.standings.map((standingsItem:any, index:number) => {
                        if(standingsItem.group){
                            if(standingsItem.type === selectedTypeOfStandingsTable){
                                return(
                                    <div key = {index} className = 'standing-table__wrapper'>
                                        <h3 className = 'standing-table__title'>{standingsItem.group}</h3>
                                        <StandingsTable standingsTable = {standingsItem.table}/>
                                    </div>
                                )
                            }
                        }
                        else{
                            if(standingsItem.type === selectedTypeOfStandingsTable){
                                return(
                                    <StandingsTable key = {index} standingsTable = {standingsItem.table}/>
                                )
                            }
                        }
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state:appStateType) =>{
    return{
        currentStandings:state.standingsReducer.currentStandings,
        isLoading:state.standingsReducer.isLoading,
        error:state.standingsReducer.error,
        selectedTypeOfStandingsTable:state.standingsReducer.selectedTypeOfStandingsTable
    }
}

const mapDispatchToProps = ((dispatch:Dispatch<any>)=>{
    return{
        fetchStandings: (compId:number) => dispatch(fetchStandings(compId)),
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Standings)