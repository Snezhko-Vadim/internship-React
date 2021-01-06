import React from 'react'

const TeamInformationListItem:React.FC<{nameOfCompetition:string}> = ({nameOfCompetition}) => {
    return(
        <li className = 'team__information-list-item'>{nameOfCompetition}</li>
    )
}

export default TeamInformationListItem