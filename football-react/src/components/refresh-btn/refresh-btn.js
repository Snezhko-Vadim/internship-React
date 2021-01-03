import React from 'react'
import {connect} from 'react-redux'

const RefreshBtn = ({iconClassName, refreshAction, refreshingId, onRefreshBtnClick}) => {
    return(
        <button onClick = {() => onRefreshBtnClick(refreshingId,refreshAction)} className = 'main__refresh'>
            <i className = {iconClassName}></i>
        </button>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        onRefreshBtnClick: (refreshingId,refreshAction) => {
            if(refreshingId){
                return dispatch(refreshAction(refreshingId))
            }
            else{
                return dispatch(refreshAction())
            }
        }
    }
}

export default connect(null,mapDispatchToProps)(RefreshBtn)