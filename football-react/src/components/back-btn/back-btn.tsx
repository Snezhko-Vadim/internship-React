import React from 'react'
import {withRouter,RouteComponentProps} from 'react-router-dom'

interface BackBtnProps extends RouteComponentProps<any>{
    iconClassName: string,
}

const BackBtn: React.FC<BackBtnProps> = ({iconClassName,history}) => {
    console.log(history);
    return(
        <button onClick = {history.goBack} className = 'main__back-btn'>
            <i className = {iconClassName}></i>
        </button>
    )
}

export default withRouter(BackBtn)