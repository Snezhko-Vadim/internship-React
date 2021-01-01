import React from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions'
import {Redirect} from 'react-router-dom'

const LoginPage = ({onLogin,isLogged}) => {

    if(isLogged){
        return <Redirect to = '/'/>
    }
    return(
        <div className = 'login'>
            <h2>Login</h2>
            <button onClick = {onLogin}>push the button to Login</button>
        </div>
    )
}

const mapDispatchToProps = ((dispatch) => {
    return{
        onLogin: () => {
            dispatch(login());
        }
    }
})

const mapStateToProps = ((state) => {
    return{
        isLogged: state.profileReducer.isLogged
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)