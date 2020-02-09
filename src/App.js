import React, { Component } from 'react';
import './scss/App.scss';
import Weather from './components/Weather';
import Logo from './assets/cloudy-day-1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

const API_KEY = 'bd5bf5ac83c8c79a4ca79682f5ca3d28';

class App extends Component {
	state = {
		city: null,
		country: null,
		description: null,
		temperature: null,
		feelsLike: null,
		icon: null,
		humidity: null,
		pressure: null,
		wind: null,
		isSubmitted: false
	};

	showCurrentWeather(data) {
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
			wind: `${(data.wind.speed * 3, 6)} km/h`,
			isSubmitted: true
		});
	}

	getCurrentWeatherByCity = (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
			.then((weatherNow) => {
				if (weatherNow.ok) {
					return weatherNow.json();
				} else {
					return Promise.reject(weatherNow);
				}
			})
			.then((weatherNow) => this.showCurrentWeather(weatherNow))
			.catch((error) => {
				console.log(error);
				alert(`I can't find this city. Try again or use your location!`);
			});
	};

	render() {
		const {
			isSubmitted,
			city,
			country,
			description,
			temperature,
			feelsLike,
			icon,
			humidity,
			pressure,
			wind
		} = this.state;

		if (isSubmitted) {
			return (
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
					data={this.state.data}
				/>
			);
		}

		return (
			<div className="city-search">
				<h1 className="city-search__heading">The Weather App</h1>
				<div className="city-search__logo">
					<img className="city-search__logo__img" src={Logo} alt="cloud with sun logo" />
				</div>
				<form onSubmit={this.getCurrentWeatherByCity} className="city-search__form">
					<input
						className="city-search__form__input"
						type="text"
						name="city"
						placeholder="Type in a city..."
						required
					/>
					<button className="city-search__form__btn" type="submit">
						<FontAwesomeIcon className="city-search__form__btn__icon" icon={faSearch} />
					</button>
				</form>
				<div className="city-search__location">
					<p className="city-search__location__text">or</p>
					<button onClick={this.getWeatherByGeolocation} className="city-search__location__btn">
						Use your location
						<FontAwesomeIcon className="city-search__location__btn__icon" icon={faGlobeEurope} />
					</button>
				</div>
			</div>
		);
	}
}

export default App;
