import React, {Component} from 'react'
import ErrorIndicator from '../error-indecator'

export default class ErrorBoundry extends Component<{},{isError:boolean}>{
    state={
        isError:false,
    }

    componentDidCatch(){
        this.setState({
            isError:true,
        })
    }

    render(){
        if(this.state.isError){
            return(
                <ErrorIndicator/>
            )
        }
        else{
            return this.props.children;
        }
    }
}