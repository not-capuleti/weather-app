import React, { Component } from 'react';
import humidityIcon from '../assets/humidity.png';
import windIcon from '../assets/wind.png';
import pressureIcon from '../assets/pressure.png';
import cloudIcon from '../assets/cloud.png';

class CurrentWeather extends Component {
	render() {
		const { city, country, description, temperature, icon, humidity, pressure, wind } = this.props;
		return (
			<div className="weather__current">
				<section className="weather__current--main">
					<h2 className="weather__current--main-city">{city.toUpperCase()}</h2>
					<h3 className="weather__current--main-country">{country}</h3>
					<img alt="" src={`http://openweathermap.org/img/w/${icon}.png`} />
					<p className="weather__current--main-temperature">{temperature + `\u00B0`} </p>
					<p className="weather__current--main-description">{description}</p>
				</section>
				<section className="weather__current--details">
					<h3 className="weather__current--details-title">Details</h3>
					<div className="weather__current--details-info">
						<div className="weather__current--details-info-cell">
							<img src={humidityIcon} alt="humidity icon" />
							<p>Humidity: {humidity}</p>
						</div>
						<div className="weather__current--details-info-cell">
							<img src={windIcon} alt="wind icon" />
							<p>Wind: {wind}</p>
						</div>
						<div className="weather__current--details-info-cell">
							<img src={pressureIcon} alt="pressure icon" />
							<p>Pressure: {pressure}</p>
						</div>
						<div className="weather__current--details-info-cell">
							<img src={cloudIcon} alt="cloud icon" />
							<p>Clouds: </p>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default CurrentWeather;
