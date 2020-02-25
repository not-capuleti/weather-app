import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

const API_KEY = 'bd5bf5ac83c8c79a4ca79682f5ca3d28';

class Weather extends Component {
	state = {
		forecast5days: []
	};

	setIcon = (id) => {
		if (id === 803 || id === 804) {
			return '/images/moreClouds.png';
		} else if (id === 801 || id === 802) {
			return '/images/fewClouds.png';
		} else if (id === 800) {
			return '/images/sun.png';
		} else if (id === 781) {
			return '/images/tornado.png';
		} else if (id === 771) {
			return '/images/whirl.png';
		} else if (id > 700 && id < 763) {
			return '/images/mist.png';
		} else if (id > 599) {
			return '/images/snow.png';
		} else if (id > 299 && id > 499) {
			return '/images/rain.png';
		} else if (id > 199) {
			return '/images/thunder.png';
		} else {
			return '/images/fewClouds.png';
		}
	};

	get5dayForecast = () => {
		const { city } = this.props;

		fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
			.then((forecast) => {
				if (forecast.ok) {
					return forecast.json();
				} else {
					return Promise.reject(forecast);
				}
			})
			.then((forecast) => {
				this.setState({ forecast5days: forecast.list });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	componentDidMount() {
		this.get5dayForecast();
	}

	render() {
		const { city, country, description, temperature, feelsLike, id, humidity, pressure, wind } = this.props;
		const { forecast5days } = this.state;

		return (
			<div className="weather">
				<CurrentWeather
					setIcon={this.setIcon}
					city={city}
					country={country}
					description={description}
					temperature={temperature}
					feelsLike={feelsLike}
					id={id}
					humidity={humidity}
					pressure={pressure}
					wind={wind}
				/>
				<Forecast setIcon={this.setIcon} forecast5days={forecast5days} />
			</div>
		);
	}
}

export default Weather;
