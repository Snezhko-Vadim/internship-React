import React,{Dispatch, useEffect} from 'react'
import {connect} from 'react-redux'
import {withRouter,RouteComponentProps} from 'react-router-dom'
import {fetchCompetitions} from '../../actions'
import {IAction, ICompetition} from '../../types/types'
import {appStateType} from '../../store'
import Preloader from "../preloader/preloader"
import ErrorIndicator from '../error-indecator/error-indicator'
import ItemOfCompetitionsList from './ItemOfCompetitionsList'

interface CompetitionsListProps extends RouteComponentProps {
    fetchCompetitions: () => void,
    competitions: Array<ICompetition>,
    isLoading: boolean,
    error: any,
}

const CompetitionsList:React.FC<CompetitionsListProps> = (props) => {
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
                onCompListItemClick={(competitionId:number) => {
                    history.push(`${competitionId}/`)
                }}/>)}
            </ul>
        )
    }
}

const mapStateToProps = ((state:appStateType)=>{
    return{
        competitions:state.competitionsReducer.competitions,
        isLoading:state.competitionsReducer.isLoading,
        error:state.competitionsReducer.error,
    }
})

const mapDispatchToProps = ((dispatch:Dispatch<any>)=>{
    return{
        fetchCompetitions: () => dispatch(fetchCompetitions()),
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CompetitionsList))