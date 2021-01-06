import React from 'react'
import StandingsTableRow from './standings-table-row'
import {IStandingsTableItem} from '../../../types/types'

interface StandingsTable {
    standingsTable: Array<IStandingsTableItem>
}

const StandingsTable:React.FC<StandingsTable> = ({standingsTable}) => {
    return(
        <table className = 'standing-table'>
            <thead>
                <tr className = 'standing-table__string'>
                    <td className = 'standing-table__cell'>position</td>
                    <td className = 'standing-table__cell'>team</td>
                    <td className = 'standing-table__cell'>G</td>
                    <td className = 'standing-table__cell'>W</td>
                    <td className = 'standing-table__cell'>D</td>
                    <td className = 'standing-table__cell'>L</td>
                    <td className = 'standing-table__cell'>B</td>
                    <td className = 'standing-table__cell'>D</td>
                    <td className = 'standing-table__cell'>P</td>
                    <td className = 'standing-table__cell'>last matches</td>
                </tr>
            </thead>
            <tbody>
                {
                    standingsTable.map((item)=><StandingsTableRow key = {item.team.id} standingsItem = {item}/>)
                }
            </tbody>
        </table>
    )
}

export default StandingsTable