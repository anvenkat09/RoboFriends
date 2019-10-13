import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'

class App extends Component{
    constructor(){
        super()
        /*state lives in the parent and can be passed to different child components.*/
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    /* lifecycle hook that runs when the page is loaded / refreshed */
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) =>{
        this.setState({
            searchfield: event.target.value
        })
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>                
                    </ErrorBoundary>
                </Scroll>
            </div>
        );    
    }
}

export default App;