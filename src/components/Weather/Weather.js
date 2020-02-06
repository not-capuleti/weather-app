import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

class VisualPresentation extends Component {
	render() {
		return (
			<section>
				<h1>Weather App</h1>
				<CurrentWeather />
				<Forecast />
			</section>
		);
	}
}

export default VisualPresentation;
