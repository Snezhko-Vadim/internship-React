import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchCompetitions} from '../../actions'
import Preloader from '../preloader'
import ErrorIndicator from '../error-indecator'

import ItemOfCompetitionsList from './ItemOfCompetitionsList'

function CompetitionsList (props){
    const {fetchCompetitions} = props;
    useEffect(()=>{
        fetchCompetitions();
    },[])

    const {competitions,isLoading,error,history} = props;

    if(isLoading){
        return(
            <Preloader/>
        )
    }
    else if(error){
        return(
            <ErrorIndicator/>
        )
    }
    else{
        return(
            <ul className="competitions-list">
                {competitions.map((comp)=><ItemOfCompetitionsList
                key = {comp.id}
                value={comp.name}
                idOfComp={comp.id}
                onCompListItemClick={(competitionId) => {
                    history.push(`${competitionId}/`)
                }}/>)}
            </ul>
        )
    }
}

const mapStateToProps = ((state)=>{
    return{
        competitions:state.competitionsReducer.competitions,
        isLoading:state.competitionsReducer.isLoading,
        error:state.competitionsReducer.error,
    }
})

const mapDispatchToProps = ((dispatch)=>{
    return{
        fetchCompetitions: () => dispatch(fetchCompetitions()),
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CompetitionsList))