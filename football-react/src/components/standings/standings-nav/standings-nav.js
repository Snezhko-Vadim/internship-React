import React from 'react'
import {connect} from 'react-redux'
import {standingsNavSelect} from '../../../actions'

const StandingsNav = ({onStandingsNavClick}) => {
    return(
        <div className = "standing__nav">
            <button onClick = {() => onStandingsNavClick('TOTAL')} className = 'standing__nav-item'>Total</button>
            <button onClick = {() => onStandingsNavClick('HOME')} className = 'standing__nav-item'>Home</button>
            <button onClick = {() => onStandingsNavClick('AWAY')} className = 'standing__nav-item'>Away</button>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return{
        onStandingsNavClick: (value) => dispatch(standingsNavSelect(value))
    }
}

export default connect(null,mapDispatchToProps)(StandingsNav)