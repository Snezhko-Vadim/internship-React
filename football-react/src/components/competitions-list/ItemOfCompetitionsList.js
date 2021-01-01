import React from 'react'
import {Link} from 'react-router-dom'

function ItemOfCompetitionsList ({value,idOfComp,onCompListItemClick}){
    return(
        <li className="competitions-list__item" id = {idOfComp} onClick = {() => onCompListItemClick(idOfComp)}>
            {value}
        </li>
    )
}

export default ItemOfCompetitionsList