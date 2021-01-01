import React from 'react'
import {connect} from 'react-redux'

const AddToFavorites = ({isLogged,onAddAction}) => {
    if(isLogged){
        return(
            <a className = 'add-to-favorites' onClick = {onAddAction}>addToFavorites</a>
        )
    }
    return(
        <a style = {{display: 'none'}} className = 'add-to-favorites' onClick = {onAddAction}>addToFavorites</a>
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