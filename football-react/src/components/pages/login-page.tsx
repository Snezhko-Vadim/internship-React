import React, { Dispatch } from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions'
import {Redirect} from 'react-router-dom'
import {appStateType} from '../../store'
import BackBtn from '../back-btn'
import HomeBtn from '../home-btn'

interface LoginPageProps {
    onLogin: ()=>void,
    isLogged: boolean,
}

const LoginPage:React.FC<LoginPageProps> = ({onLogin,isLogged}) => {

    if(isLogged){
        return <Redirect to = '/'/>
    }
    return(
        <div className = 'login-page'>
            <h1 className = 'main__title'>Football</h1>
            <h2 className = 'login-page__title'>Login</h2>
            <button className ='login-page__btn' onClick = {onLogin}>push the button to Login</button>
            <BackBtn iconClassName = 'fas fa-arrow-left'/>
            <HomeBtn iconClassName = 'fas fa-home'/>
        </div>
    )
}

const mapDispatchToProps = ((dispatch: Dispatch<any>) => {
    return{
        onLogin: () => {
            dispatch(login());
        }
    }
})

const mapStateToProps = ((state:appStateType) => {
    return{
        isLogged: state.loginReducer.isLogged
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)