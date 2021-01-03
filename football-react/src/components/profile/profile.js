import React from 'react'
import ProfileFavoritesList from './profile-favorites-list'
import {connect} from 'react-redux'
import {deleteFromFavoritesPlayers,deleteFromFavoritesTeams} from '../../actions'

const Profile = ({favoritesTeams,favoritesPlayers,deleteFromFavoritesPlayers,deleteFromFavoritesTeams}) => {
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

const mapStateToProps = (state) => {
    return{
        favoritesTeams: state.profileReducer.favoritesTeams,
        favoritesPlayers: state.profileReducer.favoritesPlayers,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteFromFavoritesPlayers: (playerId) => dispatch(deleteFromFavoritesPlayers(playerId)),
        deleteFromFavoritesTeams: (teamId) => dispatch(deleteFromFavoritesTeams(teamId)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)