import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';




class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users=> {this.setState({ robots: users })})
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}
	render() {
		const { robots, searchfield } = this.state
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (!robots.length){
			return <h1 className = 'tc myFont'> Loading </h1>
		} else {
		return (
		<div className='tc'>
			<h1 className= 'myFont'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange} />
			<Scroll>
				<CardList robots={ filteredRobots }/>
			</Scroll>
		</div>
		);
		}
	}	
}

export default App;