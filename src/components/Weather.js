import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

const API_KEY = 'bd5bf5ac83c8c79a4ca79682f5ca3d28';

class Weather extends Component {
	state = {
		forecast5days: []
	};

	get5dayForecast = () => {
		const { city } = this.props;

		fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
			.then((forecast) => {
				if (forecast.ok) {
					return forecast.json();
				} else {
					return Promise.reject(forecast);
				}
			})
			.then((forecast) => {
				this.setState({ forecast5days: forecast.list });
				console.log(this.state.forecast5days);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	componentDidMount() {
		this.get5dayForecast();
	}

	render() {
		const { city, country, description, temperature, feelsLike, icon, humidity, pressure, wind } = this.props;
		const { forecast5days } = this.state;

		return (
			<div className="weather">
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
				<Forecast forecast5days={forecast5days} />
			</div>
		);
	}
}

export default Weather;
