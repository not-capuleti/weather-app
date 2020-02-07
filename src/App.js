import React, { Component, Fragment } from 'react';
import './scss/App.scss';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Weather from './components/Weather/Weather';
import CitySearch from './components/CitySearch';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={CitySearch} />
					<Route path="/app" component={Weather} />
				</Switch>
			</Router>
		);
	}
}

export default App;
