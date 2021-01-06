import React from 'react'
import {connect} from 'react-redux'
import { Dispatch } from 'react'
import {standingsNavSelect} from '../../../actions'
import {appStateType} from '../../../store'

interface StandingsNavProps{
    onStandingsNavClick: (value:string) => void,
    selectedTypeOfStandingsTable: string,
}

const StandingsNav:React.FC<StandingsNavProps> = ({onStandingsNavClick,selectedTypeOfStandingsTable}) => {
    if(selectedTypeOfStandingsTable === 'TOTAL'){
        return(
            <div className = "standing__nav">
                <button onClick = {() => onStandingsNavClick('TOTAL')} className = 'standing__nav-item standing__nav-item_active'>Total</button>
                <button onClick = {() => onStandingsNavClick('HOME')} className = 'standing__nav-item'>Home</button>
                <button onClick = {() => onStandingsNavClick('AWAY')} className = 'standing__nav-item'>Away</button>
            </div>
        )
    }
    else if(selectedTypeOfStandingsTable === 'HOME'){
        return(
            <div className = "standing__nav">
                <button onClick = {() => onStandingsNavClick('TOTAL')} className = 'standing__nav-item'>Total</button>
                <button onClick = {() => onStandingsNavClick('HOME')} className = 'standing__nav-item standing__nav-item_active'>Home</button>
                <button onClick = {() => onStandingsNavClick('AWAY')} className = 'standing__nav-item'>Away</button>
            </div>
        )
    }
    else{
        return(
            <div className = "standing__nav">
                <button onClick = {() => onStandingsNavClick('TOTAL')} className = 'standing__nav-item'>Total</button>
                <button onClick = {() => onStandingsNavClick('HOME')} className = 'standing__nav-item'>Home</button>
                <button onClick = {() => onStandingsNavClick('AWAY')} className = 'standing__nav-item standing__nav-item_active'>Away</button>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch:Dispatch<any>) => {
    return{
        onStandingsNavClick: (value:string) => dispatch(standingsNavSelect(value))
    }
}

const mapStateToProps = (state:appStateType) => {
    return{
        selectedTypeOfStandingsTable: state.standingsReducer.selectedTypeOfStandingsTable,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StandingsNav)