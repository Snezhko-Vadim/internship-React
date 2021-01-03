import React,{useEffect, useState} from 'react'
import {connect} from 'react-redux'

import {addToFavoritesTeams, fetchMatches,fetchTeam} from '../../actions'

import TeamMatches from './team-matches'
import TeamInformation from './team-information'
import Preloader from '../preloader'
import ErrorIndecator from '../error-indecator'
import AddToFavorites from '../addToFavorites'

const Team = ({matches,
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

    return(
        <div className = 'team'>
            <AddToFavorites onAddAction = {() => onAddToFavoritesTeams(team)}/>
            <div className = 'team__title'>
                <img className = 'team__title-icon' src = {team.crestUrl}/>
                <h2 className = 'team__title-text'>{team.name}</h2>
            </div>
            <div className = 'team__content'>
                <TeamInformation team = {team}/>
                <TeamMatches matches = {matches.matches}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        team:state.teamReducer.team,
        isTeamLoading:state.teamReducer.isLoading,
        teamError:state.teamReducer.error,
        matches:state.matchesReducer.matches,
        isMatchesLoading:state.matchesReducer.isLoading,
        matchesError:state.matchesReducer.error,
    }
}

const mapDispatchToProps = ((dispatch)=>{
    return{
        fetchMatches: (teamId) => dispatch(fetchMatches(teamId)),
        fetchTeam: (teamId) => dispatch(fetchTeam(teamId)),
        onAddToFavoritesTeams: (team) => dispatch(addToFavoritesTeams(team)),
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Team)