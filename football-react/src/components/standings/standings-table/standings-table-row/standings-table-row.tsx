import React, {useState} from 'react'
import {withRouter,RouteComponentProps} from 'react-router-dom'
import LastMatchesIndecator from './last-matches-indecator'
import {IStandingsTableItem} from '../../../../types/types'

interface StandingsTableRow extends RouteComponentProps{
    standingsItem: IStandingsTableItem,
}

const StandingsTableRow:React.FC<StandingsTableRow> = ({standingsItem,history}) => {
    const [idOfTeam, setIdOfTeam] = useState(standingsItem.team.id);
    let form;

    const onTeamClick = (teamId:number) => {
        history.push(`teams/${teamId}`)
    }

    if(standingsItem.form){
        form = standingsItem.form.split(',');
    }
    else{
        form = [null,null,null,null,null]
    }
    return(
        <tr className = 'standing-table__string'>
            <td className = 'standing-table__cell position'>
                {
                    standingsItem.position
                }
            </td>
            <td className = 'standing-table__cell name'>
                <div className = 'standing-table__team-name'>
                    <img className = 'team-icon' src = {standingsItem.team.crestUrl}/>
                    <a onClick = {() => onTeamClick(standingsItem.team.id)} className = 'team-name'>{standingsItem.team.name}</a>
                </div>
            </td>
            <td className = 'standing-table__cell played-games'>{standingsItem.playedGames}</td>
            <td className = 'standing-table__cell won'>{standingsItem.won}</td>
            <td className = 'standing-table__cell draw'>{standingsItem.draw}</td>
            <td className = 'standing-table__cell lost'>{standingsItem.lost}</td>
            <td className = 'standing-table__cell scored-missed'>{`${standingsItem.goalsFor}/${standingsItem.goalsAgainst}`}</td>
            <td className = 'standing-table__cell difference'>{standingsItem.goalDifference}</td>
            <td className = 'standing-table__cell points'>{standingsItem.points}</td>
            <td className = 'standing-table__cell last-matches'>
                <div className = 'standing-table__last-matches'>
                    <LastMatchesIndecator formItem = {form[0]}/>
                    <LastMatchesIndecator formItem = {form[1]}/>
                    <LastMatchesIndecator formItem = {form[2]}/>
                    <LastMatchesIndecator formItem = {form[3]}/>  
                    <LastMatchesIndecator formItem = {form[4]}/>
                </div>
            </td>
        </tr>
    )
}


export default withRouter(StandingsTableRow)