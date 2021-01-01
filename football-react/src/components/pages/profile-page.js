import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import Profile from '../profile'

const ProfilePage = ({isLogged}) => {
    if(isLogged){
        return(
            <Profile/>
        )
    }
    return(
        <Redirect to = '/login'/>
    )
}

const mapStateToProps = (state) => {
    return{
        isLogged: state.profileReducer.isLogged,
    }
}

export default connect(mapStateToProps)(ProfilePage)