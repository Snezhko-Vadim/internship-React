import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const ProfileFavoritesListItem = ({fevoritesListItem, onListControlDel,history}) => {
    const onTeamClick = (teamId) => {
        history.push(`/teams/${teamId}`);
    }
    return(
        <li className = 'favorites-list-item'>
            <p onClick = {() => onTeamClick(fevoritesListItem.id)} className = 'favorites-list-name'>{fevoritesListItem.name}</p>
            <a onClick = {() => onListControlDel(fevoritesListItem.id)} className = 'favorites-list-control'>-</a>
        </li>
    )
}

/* const mapDispatchToProps = (dispatch) => {
    return{
        onListControlDel: () => dispatch(),
    }
} */

export default withRouter(ProfileFavoritesListItem)