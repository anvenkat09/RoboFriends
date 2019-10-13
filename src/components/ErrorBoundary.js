import React, {Component} from 'react';

/*Intended to display an error if something goes wrong with the App, but not cause it to break */
class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({
            hasError: true
        })
    }

    render(){
        if(this.state.hasError){
            return <h1>Encountered an error...</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;