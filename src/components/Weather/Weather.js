import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

class Weather extends Component {
	render() {
		const { city, country, description, temperature, feelsLike, icon, humidity, pressure, wind } = this.props;

		return (
			<section>
				{/* <h1>Weather App</h1>
				<CurrentWeather
					city={city}
					country={country}
					description={description}
					temperature={temperature}
					feelsLike={feelsLike}
					icon={icon}
					humidity={humidity}
					pressure={pressure}
					wind={wind}
				/>
				<Forecast /> */}
			</section>
		);
	}
}

export default Weather;
