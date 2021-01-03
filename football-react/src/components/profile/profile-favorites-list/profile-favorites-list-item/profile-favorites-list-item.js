import React from 'react'
import {withRouter} from 'react-router-dom'

const ProfileFavoritesListItem = ({fevoritesListItem, onListControlDel,history}) => {
    const onTeamClick = (teamId) => {
        history.push(`/teams/${teamId}`);
    }
    return(
        <li className = 'favorites-list-item'>
            <p onClick = {() => onTeamClick(fevoritesListItem.id)} className = 'favorites-list-name'>{fevoritesListItem.name}</p>
            <a onClick = {() => onListControlDel(fevoritesListItem.id)} className = 'favorites-list-control'>
                <i class="fas fa-minus"></i>
            </a>
        </li>
    )
}

export default withRouter(ProfileFavoritesListItem)