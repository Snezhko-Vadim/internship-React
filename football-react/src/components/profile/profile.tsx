import React, { Dispatch } from 'react'
import ProfileFavoritesList from './profile-favorites-list'
import {connect} from 'react-redux'
import {deleteFromFavoritesPlayers,deleteFromFavoritesTeams} from '../../actions'
import {IFavoritesPlayer,IFavoritesTeam,IAction} from '../../types/types'
import {appStateType} from '../../store'

interface ProfileProps{
    favoritesTeams: Array<IFavoritesTeam>,
    favoritesPlayers: Array<IFavoritesPlayer>,
    deleteFromFavoritesPlayers:(playerId:number) => void,
    deleteFromFavoritesTeams:(teamId:number) => void,
}

const Profile:React.FC<ProfileProps> = ({favoritesTeams,favoritesPlayers,deleteFromFavoritesPlayers,deleteFromFavoritesTeams}) => {
    return(
        <div className = 'profile'>
            <div className = 'profile-favorites'>
                <div className = 'profile-favorites-item'>
                    <h3 className = 'profile-favorites-item-name'>Favorites Teams</h3>
                    <ProfileFavoritesList favoritesList = {favoritesTeams} onListControlDel = {deleteFromFavoritesTeams}/>
                </div>
                <div className = 'profile-favorites-item'>
                    <h3 className = 'profile-favorites-item-name'>Favorites Players</h3>
                    <ProfileFavoritesList favoritesList = {favoritesPlayers} onListControlDel = {deleteFromFavoritesPlayers}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state:appStateType) => {
    return{
        favoritesTeams: state.profileReducer.favoritesTeams,
        favoritesPlayers: state.profileReducer.favoritesPlayers,
    }
}

const mapDispatchToProps = (dispatch:Dispatch<any>) => {
    return{
        deleteFromFavoritesPlayers: (playerId:number) => dispatch(deleteFromFavoritesPlayers(playerId)),
        deleteFromFavoritesTeams: (teamId:number) => dispatch(deleteFromFavoritesTeams(teamId)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)