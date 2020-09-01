import React,{Component} from 'react';
/* importing different component */
import Scroll from '../components/Scroll.js'
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';

import './App.css'

class App extends Component {
  /* constructor */
  constructor(){
    super ()
    this.state = {
      robots : [],
      searchField : ""
    }
  }
  componentDidMount(){
    fetch('https://swapnasubhamdas.github.io/api.json') // https://swapnasubhamdas.github.io/api.json // https://jsonplaceholder.typicode.com/users
    .then(response => response.json())
    .then(users => this.setState({robots: users}))

  }
  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }
  render(){
    const {robots, searchField} = this.state;
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    if(robots.length === 0){
      return <h1>Loading</h1>
    }
    else{
    return (
      <div className = "tc">
        <h1 className = "f1">Friends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <Scroll>
          <CardList robots = {filterRobots}/>
        </Scroll>
      </div>
      );
    }
  } 
}

export default App;
