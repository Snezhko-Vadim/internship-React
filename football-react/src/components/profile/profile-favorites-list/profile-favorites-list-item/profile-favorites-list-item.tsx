import React from 'react'
import {IFavoritesPlayer,IFavoritesTeam} from '../../../../types/types'
import {withRouter,RouteComponentProps} from 'react-router-dom'

interface ProfileFavoritesListItemProps extends RouteComponentProps{
    fevoritesListItem: IFavoritesPlayer | IFavoritesTeam,
    onListControlDel: (id:number) => void,
}

const ProfileFavoritesListItem:React.FC<ProfileFavoritesListItemProps> = ({fevoritesListItem, onListControlDel,history}) => {
    const onTeamClick = (teamId:number) => {
        history.push(`/teams/${teamId}`);
    }
    return(
        <li className = 'favorites-list-item'>
            <p onClick = {() => onTeamClick(fevoritesListItem.id)} className = 'favorites-list-name'>{fevoritesListItem.name}</p>
            <a onClick = {() => onListControlDel(fevoritesListItem.id)} className = 'favorites-list-control'>
                <i className="fas fa-minus"></i>
            </a>
        </li>
    )
}

export default withRouter(ProfileFavoritesListItem)