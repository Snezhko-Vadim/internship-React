import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {HomePage, CompetitionsPage, ProfilePage, LoginPage} from '../pages'
import Standings from '../standings'
import Team from '../team'

export default function App(){
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
                return <Standings idOfCompetition = {match.params.compId}/>
            }}
            exact
            />
            <Route
            path='/competitions/:compId/teams/:teamId'
            render = {({match}) => {
                return <Team teamId = {match.params.teamId}/>
            }}
            />
            <Route
            path='/teams/:teamId'
            render = {({match}) => {
                return <Team teamId = {match.params.teamId}/>
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
            render = {() => {
                return <Team teamId = {match.params.teamId}/>
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