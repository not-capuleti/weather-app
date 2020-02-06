import React, { Component, Fragment } from 'react';
import './App.css';
import Weather from './components/Weather/Weather';
import CitySearch from './components/CitySearch';

const API_KEY = 'bd5bf5ac83c8c79a4ca79682f5ca3d28';

class App extends Component {
	getCurrentWeather = async (event) => {
		event.preventDefault();

		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}`);

		const data = await api_call.json();
		console.log(data);
	};

	render() {
		return (
			<Fragment>
				<Weather />
				<CitySearch getCurrentWeather={this.getCurrentWeather} />
			</Fragment>
		);
	}
}

export default App;
