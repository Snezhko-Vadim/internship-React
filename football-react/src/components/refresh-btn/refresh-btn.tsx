import React,{Dispatch} from 'react'
import {connect} from 'react-redux'

interface RefreshBtnProps{
    iconClassName:string,
    refreshAction: any,
    refreshingId?: number,
    onRefreshBtnClick: (refreshAction: any, refreshingId: number | undefined) => void,
}

const RefreshBtn:React.FC<RefreshBtnProps> = ({iconClassName, refreshAction, refreshingId, onRefreshBtnClick}) => {
    return(
        <button onClick = {() => onRefreshBtnClick(refreshingId,refreshAction)} className = 'main__refresh'>
            <i className = {iconClassName}></i>
        </button>
    )
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return{
        onRefreshBtnClick: (refreshAction: any, refreshingId:number | undefined) => {
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