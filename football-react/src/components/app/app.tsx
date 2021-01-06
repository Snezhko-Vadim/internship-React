import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {HomePage, StandingsPage, TeamPage, CompetitionsPage, ProfilePage, LoginPage} from '../pages'

const App:React.FC = () => {
    return(
        <Switch>
            <Route 
            path='/competitions/'
            component = {CompetitionsPage}
            exact
            />
            <Route 
            path='/competitions/:compId/'
            render = {({match}) => {
                return <StandingsPage idOfCompetition = {match.params.compId}/>
            }}
            exact
            />
            <Route
            path='/competitions/:compId/teams/:teamId'
            render = {({match}) => {
                return <TeamPage teamId = {match.params.teamId}/>
            }}
            />
            <Route
            path='/teams/:teamId'
            render = {({match}) => {
                return <TeamPage teamId = {match.params.teamId}/>
            }}
            />
            <Route 
            path='/login'
            component = {LoginPage}
            exact
            />
            <Route 
            path='/profile'
            component = {ProfilePage}
            exact
            />
            <Route 
            path='/profile/favorites-teams'
            render = {({match}) => {
                return <TeamPage teamId = {match.params.teamId}/>
            }}
            exact
            />
            <Route 
            path='/'
            component = {HomePage}
            exact
            />
        </Switch>
    )
}

export default App