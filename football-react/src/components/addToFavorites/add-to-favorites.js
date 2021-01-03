import React from 'react'
import {connect} from 'react-redux'

const AddToFavorites = ({isLogged,onAddAction}) => {
    if(isLogged){
        return(
            <a className = 'add-to-favorites' title = 'Add to favorites' onClick = {onAddAction}>
                <i className = 'fas fa-plus'></i>
            </a>
        )
    }
    return(
        <a style = {{display: 'none'}} className = 'add-to-favorites' onClick = {onAddAction}>
            <i className = 'fas fa-plus'></i>
        </a>
    )
}

/* const mapDispatchToProps = (dispatch) => {
    return{
        onAddAction: () => dispatch(onAddAction())
    }
} */

const mapStateToProps = (state) => {
    return{
        isLogged: state.profileReducer.isLogged
    }
}

export default connect(mapStateToProps)(AddToFavorites)