import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {appStateType} from '../../store'

import Profile from '../profile'
import BackBtn from '../back-btn'
import HomeBtn from '../home-btn'

const ProfilePage:React.FC<{isLogged:boolean}> = ({isLogged}) => {
    if(isLogged){
        return(
            <div className = 'profile-page'>
                <h1 className = 'main__title'>Football</h1>
                <h2 className = 'profile-page__title'>profile</h2>
                <Profile/>
                <BackBtn iconClassName = 'fas fa-arrow-left'/>
                <HomeBtn iconClassName = 'fas fa-home'/>
            </div>
        )
    }
    return(
        <Redirect to = '/login'/>
    )
}

const mapStateToProps = (state:appStateType) => {
    return{
        isLogged: state.loginReducer.isLogged,
    }
}

export default connect(mapStateToProps)(ProfilePage)