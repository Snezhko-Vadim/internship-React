import React from 'react'
import ProfileFavoritesListItem from './profile-favorites-list-item'

const ProfileFavoritesList = ({favoritesList,onListControlDel}) => {
    return(
        <ul className = 'favorites-list'>
            {
                favoritesList.map((item) => <ProfileFavoritesListItem key = {item.id} fevoritesListItem = {item} onListControlDel = {onListControlDel}/>)
            }
        </ul>
    )
}

export default ProfileFavoritesList