import request from '../services/request'

const fetchCompetitionsLoaded = (data) => {
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

const fetchCompetitionsError = (error) => {
    return{
        type: 'FETCH_COMPETITIONS_FAILURE',
        payload:error,
    }
}

const fetchStandingsLoaded = (data) => {
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

const fetchStandingsError = (error) => {
    return{
        type: 'FETCH_STANDINGS_FAILURE',
        payload:error,
    }
}

const fetchTeamLoaded = (data) => {
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

const fetchTeamError = (error) => {
    return{
        type: 'FETCH_TEAM_FAILURE',
        payload:error,
    }
}

const fetchMatchesLoaded = (data) => {
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

const fetchMatchesError = (error) => {
    return{
        type: 'FETCH_MATCHES_FAILURE',
        payload:error,
    }
}

function fetchStandings(competitionId){
    return (dispatch) => {
        dispatch(fetchStandingsRequested())
        return request(`http://api.football-data.org/v2/competitions/${competitionId}/standings`,'7d9c12f5860048e2b3a48176691a5ece')
        .then(response => dispatch(fetchStandingsLoaded(response)),error => dispatch(fetchStandingsError(error)))
    }
}

function fetchCompetitions(){
    return (dispatch) => {
        const availableCompetitions = [2000,2001,2002,2003,2013,2014,2015,2016,2017,2018,2019,2021];
            dispatch(fetchCompetitionsRequested());
            return request('http://api.football-data.org/v2/competitions/','7d9c12f5860048e2b3a48176691a5ece')
            .then((response)=>{
                let availableCompetitionsArray = [];
                for(let i = 0; i < availableCompetitions.length; i++){
                    availableCompetitionsArray.push(response.competitions
                        .find((competition)=>competition.id === availableCompetitions[i]));
                }
                dispatch(fetchCompetitionsLoaded(availableCompetitionsArray));
            } , (error) => {
                dispatch(fetchCompetitionsError(error))
            })
    }
}

function fetchTeam(teamId){
    return (dispatch) => {
        dispatch(fetchTeamRequested())
        return request(`http://api.football-data.org/v2/teams/${teamId}`,'7d9c12f5860048e2b3a48176691a5ece')
        .then(response => dispatch(fetchTeamLoaded(response)),error => dispatch(fetchTeamError(error)))
    }
}

function fetchMatches(teamId){
    return (dispatch) => {
        dispatch(fetchMatchesRequested())
        return request(`http://api.football-data.org/v2/teams/${teamId}/matches/`,'7d9c12f5860048e2b3a48176691a5ece')
        .then(response => dispatch(fetchMatchesLoaded(response)),error => dispatch(fetchMatchesError(error)))
    }
}

const standingsNavSelect = (value) => {
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

const addToFavoritesTeams = (team) => {
    return{
        type: 'ADD_TO_FAVORITES_TEAMS',
        payload: team,
    }
}

const addToFavoritesPlayers = (player) => {
    return{
        type: 'ADD_TO_FAVORITES_PLAYERS',
        payload: player,
    }
}

const deleteFromFavoritesPlayers = (playerId) => {
    return{
        type: 'DELETE_FROM_FAVORITES_PLAYERS',
        payload: playerId,
    }
}

const deleteFromFavoritesTeams = (teamId) => {
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