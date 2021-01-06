import { Dispatch } from 'react'
import request from '../services/request'
import {ICurrentStandings,
    ICompetition,
    ITeam,
    IMatches,
    IAction,
    IFavoritesPlayer,
    IFavoritesTeam} from '../types/types'

const fetchCompetitionsLoaded = (data:Array<ICompetition>) => {
    return {
        type: 'FETCH_COMPETITIONS_REQUEST',
        payload: data,
    }
}

const fetchCompetitionsRequested = () => {
    return{
        type: 'FETCH_COMPETITIONS_SUCCESS'
    }
}

const fetchCompetitionsError = (error:any) => {
    return{
        type: 'FETCH_COMPETITIONS_FAILURE',
        payload:error,
    }
}

const fetchStandingsLoaded = (data:ICurrentStandings) => {
    return {
        type: 'FETCH_STANDINGS_REQUEST',
        payload: data,
    }
}

const fetchStandingsRequested = () => {
    return{
        type: 'FETCH_STANDINGS_SUCCESS'
    }
}

const fetchStandingsError = (error:any) => {
    return{
        type: 'FETCH_STANDINGS_FAILURE',
        payload:error,
    }
}

const fetchTeamLoaded = (data:ITeam) => {
    return {
        type: 'FETCH_TEAM_REQUEST',
        payload: data,
    }
}

const fetchTeamRequested = () => {
    return{
        type: 'FETCH_TEAM_SUCCESS'
    }
}

const fetchTeamError = (error:any) => {
    return{
        type: 'FETCH_TEAM_FAILURE',
        payload:error,
    }
}

const fetchMatchesLoaded = (data: IMatches) => {
    return {
        type: 'FETCH_MATCHES_REQUEST',
        payload: data,
    }
}

const fetchMatchesRequested = () => {
    return{
        type: 'FETCH_MATCHES_SUCCESS'
    }
}

const fetchMatchesError = (error:any) => {
    return{
        type: 'FETCH_MATCHES_FAILURE',
        payload:error,
    }
}

function fetchStandings(competitionId:number){
    return (dispatch:Dispatch<IAction>) => {
        dispatch(fetchStandingsRequested())
        return request(`http://api.football-data.org/v2/competitions/${competitionId}/standings`,'7d9c12f5860048e2b3a48176691a5ece')
        .then(response => dispatch(fetchStandingsLoaded(response)),error => dispatch(fetchStandingsError(error)))
    }
}

function fetchCompetitions(){
    return (dispatch:Dispatch<IAction>) => {
        const availableCompetitions = [2000,2001,2002,2003,2013,2014,2015,2016,2017,2018,2019,2021];
            dispatch(fetchCompetitionsRequested());
            return request('http://api.football-data.org/v2/competitions/','7d9c12f5860048e2b3a48176691a5ece')
            .then((response)=>{
                let availableCompetitionsArray = [];
                for(let i = 0; i < availableCompetitions.length; i++){
                    availableCompetitionsArray.push(response.competitions
                        .find((competition:ICompetition)=>competition.id === availableCompetitions[i]));
                }
                dispatch(fetchCompetitionsLoaded(availableCompetitionsArray));
            } , (error) => {
                dispatch(fetchCompetitionsError(error))
            })
    }
}

function fetchTeam(teamId: number){
    return (dispatch:Dispatch<IAction>) => {
        dispatch(fetchTeamRequested())
        return request(`http://api.football-data.org/v2/teams/${teamId}`,'7d9c12f5860048e2b3a48176691a5ece')
        .then(response => dispatch(fetchTeamLoaded(response)),error => dispatch(fetchTeamError(error)))
    }
}

function fetchMatches(teamId: number){
    return (dispatch: Dispatch<IAction>) => {
        dispatch(fetchMatchesRequested())
        return request(`http://api.football-data.org/v2/teams/${teamId}/matches/`,'7d9c12f5860048e2b3a48176691a5ece')
        .then(response => dispatch(fetchMatchesLoaded(response)),error => dispatch(fetchMatchesError(error)))
    }
}

const standingsNavSelect = (value: string) => {
    return{
        type: 'STANDINGS_NAV_SELECT',
        payload: value,
    }
}

const login = () => {
    return{
        type: 'LOGIN',
    }
}

const addToFavoritesTeams = (team: IFavoritesTeam) => {
    return{
        type: 'ADD_TO_FAVORITES_TEAMS',
        payload: team,
    }
}

const addToFavoritesPlayers = (player: IFavoritesPlayer) => {
    return{
        type: 'ADD_TO_FAVORITES_PLAYERS',
        payload: player,
    }
}

const deleteFromFavoritesPlayers = (playerId: number) => {
    return{
        type: 'DELETE_FROM_FAVORITES_PLAYERS',
        payload: playerId,
    }
}

const deleteFromFavoritesTeams = (teamId: number) => {
    return{
        type: 'DELETE_FROM_FAVORITES_TEAMS',
        payload: teamId,
    }
}

export {
    fetchStandings,
    fetchCompetitions,
    fetchTeam,
    fetchMatches,
    standingsNavSelect,
    login,
    addToFavoritesPlayers,
    addToFavoritesTeams,
    deleteFromFavoritesPlayers,
    deleteFromFavoritesTeams,
}