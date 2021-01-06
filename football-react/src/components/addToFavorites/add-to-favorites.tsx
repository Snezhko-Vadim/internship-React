import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {appStateType} from '../../store';
import {IFavoritesTeam,IFavoritesPlayer} from '../../types/types'

interface AddToFavoritesProps{
    isLogged: boolean,
    /* favoritesTeams:Array<IFavoritesTeam>,
    favoritesPlayers:Array<IFavoritesPlayer>, */
    onAddAction():void,
}

const AddToFavorites: React.FC<AddToFavoritesProps> = ({isLogged,onAddAction}) => {
    /* useEffect(() => {
        const favorites = {
            favoritesPlayers: favoritesPlayers,
            favoritesTeams: favoritesTeams,
        };
        localStorage.setItem('favorites',JSON.stringify(favorites));
    },[favoritesTeams,favoritesPlayers]) */
    if(isLogged){
        return(
            <a className = 'add-to-favorites' title = 'Add to favorites' onClick = {onAddAction}>
                <i className = 'fas fa-plus'></i>
            </a>
        )
    }
    return(
        <a style = {{display: 'none'}} className = 'add-to-favorites' onClick = {onAddAction}>
            <i className = 'fas fa-plus'></i>
        </a>
    )
}

const mapStateToProps = (state:appStateType) => {
    return{
        isLogged: state.loginReducer.isLogged,
        favoritesTeams: state.profileReducer.favoritesTeams,
        favoritesPlayers: state.profileReducer.favoritesPlayers,
    }
}

export default connect(mapStateToProps)(AddToFavorites)