import React from 'react'
import {withRouter} from 'react-router-dom'

const BackBtn = ({iconClassName,history}) => {
    console.log(history);
    return(
        <button onClick = {history.goBack} className = 'main__back-btn'>
            <i className = {iconClassName}></i>
        </button>
    )
}

export default withRouter(BackBtn)