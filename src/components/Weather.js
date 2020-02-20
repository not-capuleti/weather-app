import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

const API_KEY = 'bd5bf5ac83c8c79a4ca79682f5ca3d28';

class Weather extends Component {
	state = {
		forecast5days: []
	};

	setIcon = (id) => {
		switch (id) {
			case id > 199:
				return 'Thunderstorm';
				break;
			case id > 299 && id < 400:
				return 'Drizzle';
				break;
			case id > 499:
				return 'Rain';
				break;
			case id > 599:
				return 'Snow';
				break;
			case id > 700:
				return 'Mist haze tornado ash';
				break;
			case id === 800:
				return 'Clear sky';
				break;
			case id === 801:
				return 'few clouds: 11-25%';
				break;
			case id === 802:
				return 'scattered clouds: 25-50%';
				break;
			case id === 803:
				return 'broken clouds: 51-84%';
				break;
			case id === 804:
				return 'overcast clouds: 85-100%';
				break;
			default:
				return 'some sky';
				break;
		}
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
		const { city, country, description, temperature, icon, humidity, pressure, wind } = this.props;
		const { forecast5days } = this.state;

		return (
			<div className="weather">
				<CurrentWeather
					city={city}
					country={country}
					description={description}
					temperature={temperature}
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
