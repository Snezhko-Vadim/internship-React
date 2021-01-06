import React,{useEffect, useState} from 'react'
import {connect} from 'react-redux'

import {addToFavoritesTeams, fetchMatches,fetchTeam} from '../../actions'
import {appStateType} from '../../store'

import TeamMatches from './team-matches'
import TeamInformation from './team-information'
import Preloader from '../preloader'
import ErrorIndecator from '../error-indecator'
import AddToFavorites from '../addToFavorites'
import {IMatches, ITeam} from '../../types/types'
import { Dispatch } from 'react'

interface Team{
    matches: IMatches,
    team: ITeam,
    isTeamLoading: Boolean,
    isMatchesLoading: Boolean,
    teamError: any,
    matchesError: any,
    fetchTeam: (teamId:number) => void,
    fetchMatches: (teamId:number) => void,
    onAddToFavoritesTeams: (teamId: ITeam) => void,
    teamId: number,
}

const Team: React.FC<Team> = ({matches,
    team,
    isTeamLoading,
    isMatchesLoading,
    teamError,
    matchesError,
    fetchTeam,
    fetchMatches,
    onAddToFavoritesTeams,
    teamId}) => {

    useEffect(()=>{
        fetchMatches(teamId);
        fetchTeam(teamId)
    },[])
    

    if(isMatchesLoading || isTeamLoading){
        return(
            <Preloader/>
        )
    }
    if(teamError || matchesError){
        return(
            <ErrorIndecator/>
        )
    }

    let crestUrl: string|undefined
    if(!team.crestUrl){
        crestUrl = undefined;
    }
    else{
        crestUrl = team.crestUrl;
    }

    return(
        <div className = 'team'>
            <AddToFavorites onAddAction = {() => onAddToFavoritesTeams(team)}/>
            <div className = 'team__title'>
                <img className = 'team__title-icon' src = {crestUrl}/>
                <h2 className = 'team__title-text'>{team.name}</h2>
            </div>
            <div className = 'team__content'>
                <TeamInformation team = {team}/>
                <TeamMatches matches = {matches.matches}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state:appStateType) => {
    return{
        team:state.teamReducer.team,
        isTeamLoading:state.teamReducer.isLoading,
        teamError:state.teamReducer.error,
        matches:state.matchesReducer.matches,
        isMatchesLoading:state.matchesReducer.isLoading,
        matchesError:state.matchesReducer.error,
    }
}

const mapDispatchToProps = ((dispatch:Dispatch<any>)=>{
    return{
        fetchMatches: (teamId:number) => dispatch(fetchMatches(teamId)),
        fetchTeam: (teamId:number) => dispatch(fetchTeam(teamId)),
        onAddToFavoritesTeams: (team:ITeam) => dispatch(addToFavoritesTeams(team)),
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Team)