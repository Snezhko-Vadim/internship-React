const competitionsInitialState = {
    competitions: [],
    isLoading: true,
    error: null,
}

const standingsInitialState = {
    currentStandings: [],
    selectedTypeOfStandingsTable: 'TOTAL',
    isLoading: true,
    error: null,
}

const teamInitialState = {
    team: [],
    isLoading: true,
    error: null,
}

const matchesInitialState = {
    matches: [],
    isLoading: true,
    error: null,
}

const profileInitialState = {
    isLogged: false,
    favoritesTeams: [],
    favoritesPlayers: [],
}

export const competitionsReducer = (state = competitionsInitialState,action) => {
    switch(action.type){
        case 'FETCH_COMPETITIONS_REQUEST':
            console.log('i am competitionsReducer')
            return{
                ...state,
                competitions:action.payload,
                isLoading:false,
            };
        case 'FETCH_COMPETITIONS_SUCCESS':
            return{
                ...state,
                isLoading:true,
            }
        case 'FETCH_COMPETITIONS_FAILURE':
            return{
                ...state,
                isLoading:false,
                error:action.payload,
            }
    }
    return state;
}

export const standingsReducer = (state = standingsInitialState,action) => {
    switch(action.type){
        case 'FETCH_STANDINGS_REQUEST':
            console.log('i am standingsReducer')
            return{
                ...state,
                currentStandings: action.payload,
                isLoading:false,
            }
        case 'FETCH_STANDINGS_SUCCESS':
            return{
                ...state,
                isLoading: true,
            }
        case 'FETCH_STANDINGS_FAILURE':
            return{
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case 'STANDINGS_NAV_SELECT':
            return{
                ...state,
                selectedTypeOfStandingsTable: action.payload,
            }
    }
    return state;
}

export const teamReducer = (state = teamInitialState,action) => {
    switch(action.type){
        case 'FETCH_TEAM_REQUEST':
            return{
                ...state,
                team:action.payload,
                isLoading:false,
            };
        case 'FETCH_TEAM_SUCCESS':
            return{
                ...state,
                isLoading:true,
            }
        case 'FETCH_TEAM_FAILURE':
            return{
                ...state,
                isLoading:false,
                error:action.payload,
            }
    }
    return state;
}

export const matchesReducer = (state = matchesInitialState,action) => {
    switch(action.type){
        case 'FETCH_MATCHES_REQUEST':
            return{
                ...state,
                matches:action.payload,
                isLoading:false,
            };
        case 'FETCH_MATCHES_SUCCESS':
            return{
                ...state,
                isLoading:true,
            }
        case 'FETCH_MATCHES_FAILURE':
            return{
                ...state,
                isLoading:false,
                error:action.payload,
            }
    }
    return state;
}

export const profileReducer = (state = profileInitialState, action) => {
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                isLogged: true,
            }
        case'ADD_TO_FAVORITES_TEAMS':
            const newFavoriteTeam = {
                id: action.payload.id,
                name : action.payload.name,
            }
            if(!state.favoritesTeams.find((team) => team.id === newFavoriteTeam.id)){
                return{
                    ...state,
                    favoritesTeams:[...state.favoritesTeams,newFavoriteTeam]
                }
            }
            return {...state}
        case'ADD_TO_FAVORITES_PLAYERS':
            const newFavoritePlayer = {
                id: action.payload.id,
                name: action.payload.name,
            }
            if(!state.favoritesPlayers.find((player) => player.id === newFavoritePlayer.id)){
                return{
                    ...state,
                    favoritesPlayers:[...state.favoritesPlayers, newFavoritePlayer]
                }
            }
            return {...state}
        case 'DELETE_FROM_FAVORITES_PLAYERS':
            let numOfDelPlayer = state.favoritesPlayers.findIndex((item) => action.payload === item.id);
            let newArrayOfPlayers = state.favoritesPlayers;
            if(numOfDelPlayer !== -1){
                newArrayOfPlayers.splice(numOfDelPlayer,1);
            }
            return{
                ...state,
                favoritesPlayers:[...newArrayOfPlayers],
            }
        case 'DELETE_FROM_FAVORITES_TEAMS':
            let numOfDelTeam = state.favoritesTeams.findIndex((item) => action.payload === item.id);
            let newArrayOfTeams = state.favoritesTeams;
            if(numOfDelTeam !== -1){
                newArrayOfTeams.splice(numOfDelTeam,1);
            }
            return{
                ...state,
                favoritesTeams:[...newArrayOfTeams],
            }
    }
    return state;
}