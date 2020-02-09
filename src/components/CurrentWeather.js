import React, { Component } from 'react';

class CurrentWeather extends Component {
	render() {
		const { city, country, description, temperature, feelsLike, icon, humidity, pressure, wind } = this.props;
		return <p />;
	}
}

export default CurrentWeather;
