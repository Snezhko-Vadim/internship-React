import { Dispatch } from "react";

export interface ICompetitionsInitialState {
    competitions: Array<ICompetition>,
    isLoading: boolean,
    error: any,
}

export interface IStandingsInitialState {
    currentStandings: ICurrentStandings | {},
    selectedTypeOfStandingsTable: string,
    isLoading: boolean,
    error: any,
}

export interface ITeamInitialState {
    team: ITeam | {},
    isLoading: boolean,
    error: any,
}

export interface IMatchesInitialState {
    matches: IMatches | {},
    isLoading: boolean,
    error: any,
}

export interface IProfileInitialState {
    favoritesTeams: Array<IFavoritesTeam>,
    favoritesPlayers: Array<IFavoritesPlayer>,
}

export interface ICompetition {
    area: any,
    code: any,
    currentSeason: any,
    emblemUrl: string | null,
    id: number,
    lastUpdated: string,
    name: string,
    numberOfAvailableSeasons: number,
    plan: any,
}

export interface ICurrentStandings {
    competition: any,
    filters: any,
    season: any,
    standings: any,
}

export interface IStandingsTableItem{
    draw: number
    form: string
    goalDifference: number
    goalsAgainst: number
    goalsFor: number
    lost: number
    playedGames: number
    points: number
    position: number
    team: {
        id: number,
        name: string,
        crestUrl: string | undefined,
    }
    won: number
}

export interface ITeam {
    activeCompetitions: Array<{ name: string, id: number }>,
    address: string,
    area: {
        id: number,
        name: string,
    },
    clubColors: string,
    crestUrl: string | null,
    email: string | null,
    founded: number,
    id: number,
    lastUpdated: any,
    name: string,
    phone: string | null,
    shortName: string | null,
    squad: Array<IPlayer>,
    tla: any,
    venue: any,
    website: any,
}

export interface IPlayer {
    countryOfBirth: string,
    dateOfBirth: any,
    id: number,
    name: string,
    nationality: string,
    position: string,
    role: string,
    shirtNumber: any,
}

export interface IMatches {
    count: number,
    filters: any,
    matches: Array<IMatch>
}

export interface IMatch {
    awayTeam: {
        id: number,
        name: string,
    },
    competition: {
        id: number,
        name: string,
    },
    group: string,
    homeTeam: {
        id: number,
        name: string,
    },
    id: number,
    lastUpdated: string,
    matchday: number | null,
    odds: any,
    referees: any,
    score: any,
    season: any,
    stage: string,
    status: string,
    utcDate: string,
}

export interface IFavoritesTeam {
    id: number,
    name: string,
}

export interface IFavoritesPlayer {
    id: number,
    name: string,
}

export interface IAction {
    type: string,
    payload?: any,
}

export type ActionMiddlewareType = (dispatch:Dispatch <IAction>) => Promise<void>