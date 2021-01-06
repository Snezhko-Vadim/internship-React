import React from 'react'
import ProfileFavoritesListItem from './profile-favorites-list-item'
import {IFavoritesPlayer,IFavoritesTeam} from '../../../types/types'


interface ProfileFavoritesListProps{
    favoritesList:Array<IFavoritesPlayer | IFavoritesTeam>,
    onListControlDel: (id:number) => void
}

const ProfileFavoritesList:React.FC<ProfileFavoritesListProps> = ({favoritesList,onListControlDel}) => {
    return(
        <ul className = 'favorites-list'>
            {
                favoritesList.map((item) => <ProfileFavoritesListItem key = {item.id} fevoritesListItem = {item} onListControlDel = {onListControlDel}/>)
            }
        </ul>
    )
}

export default ProfileFavoritesList