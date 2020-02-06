import React, { Component, Fragment } from 'react';
import './scss/App.scss';
import Weather from './components/Weather/Weather';
import CitySearch from './components/CitySearch';

const API_KEY = 'bd5bf5ac83c8c79a4ca79682f5ca3d28';

class App extends Component {
	state = {
		city: undefined,
		country: undefined,
		description: undefined,
		temperature: undefined,
		feelsLike: undefined,
		icon: undefined,
		humidity: undefined,
		pressure: undefined,
		wind: undefined,
		error: undefined
	};

	getCurrentWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const endpoint = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
		);

		const data = await endpoint.json();
		console.log(data);

		this.setState({
			city: data.name,
			country: data.sys.country,
			description: data.weather[0].description,
			temperature: Math.floor(data.main.temp),
			// temperatureF: Math.round(data.main.temp * 1.8 + 32),
			feelsLike: Math.floor(data.main.feels_like),
			icon: data.weather[0].icon,
			humidity: data.main.humidity,
			pressure: data.main.pressure,
			wind: `${(data.wind.speed * 3, 6)} km/h`
		});
	};

	render() {
		const { city, country, description, temperature, feelsLike, icon, humidity, pressure, wind } = this.state;
		return (
			<Fragment>
				<Weather
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
				<CitySearch getCurrentWeather={this.getCurrentWeather} />
			</Fragment>
		);
	}
}

export default App;
