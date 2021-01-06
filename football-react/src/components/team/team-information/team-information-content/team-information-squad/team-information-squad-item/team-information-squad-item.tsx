import React from 'react'
import {connect} from 'react-redux'

import {addToFavoritesPlayers} from '../../../../../../actions'
import AddToFavorites from '../../../../../addToFavorites'
import {IPlayer} from '../../../../../../types/types'
import { Dispatch } from 'react'

interface TeamInformationSquadItemProps{
    squadItem: IPlayer,
    onAddToFavoritesPlayers: (player:IPlayer) => void,
}

const TeamInformationSquadItem:React.FC<TeamInformationSquadItemProps> = ({squadItem,onAddToFavoritesPlayers}) => {
    return(
        <div className = 'team__information-squad-item'>
            <AddToFavorites onAddAction = {() => onAddToFavoritesPlayers(squadItem)}/>
            <div className = 'squad-item-info'>
                <p className = 'squad-item-info-name'>Name</p>
                <p className = 'squad-item-info-value'>{squadItem.name}</p>
            </div>
            <div className = 'squad-item-info'>
                <p className = 'squad-item-info-name'>Nationality</p>
                <p className = 'squad-item-info-value'>{squadItem.nationality}</p>
            </div>
            <div className = 'squad-item-info'>
                <p className = 'squad-item-info-name'>Position</p>
                <p className = 'squad-item-info-value'>{squadItem.position}</p>
            </div>
        </div>
    )
}

const mapDispatchToProps = ((dispatch: Dispatch<any>)=>{
    return{
        onAddToFavoritesPlayers: (player:IPlayer) => dispatch(addToFavoritesPlayers(player)),
    }
})

export default connect(null, mapDispatchToProps)(TeamInformationSquadItem)