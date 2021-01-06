import React from 'react'

interface ItemOfCompetitionsListProps{
    value: string,
    idOfComp: number,
    onCompListItemClick: (idOfComp:number)=>void,
}

const ItemOfCompetitionsList:React.FC<ItemOfCompetitionsListProps> = ({value,idOfComp,onCompListItemClick}) => {
    return(
        <li className="competitions-list__item" onClick = {() => onCompListItemClick(idOfComp)}>
            {value}
        </li>
    )
}

export default ItemOfCompetitionsList