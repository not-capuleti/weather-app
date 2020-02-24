import React, { Component } from 'react';
import humidityIcon from '../assets/humidity.png';
import windIcon from '../assets/wind.png';
import pressureIcon from '../assets/pressure.png';
import feelsLikeIcon from '../assets/feelsLike.png';

class CurrentWeather extends Component {
	render() {
		const {
			setIcon,
			city,
			country,
			description,
			temperature,
			feelsLike,
			id,
			humidity,
			pressure,
			wind
		} = this.props;

		return (
			<div className="weather__current">
				<section className="weather__current--main">
					<h2 className="weather__current--main-city">{city.toUpperCase()}</h2>
					<h3 className="weather__current--main-country">{country}</h3>
					<img className="weather__current--main-icon" alt="" src={setIcon(id)} />
					<p className="weather__current--main-temperature">{temperature + `\u00B0`} </p>
					<p className="weather__current--main-description">{description}</p>
				</section>
				<section className="weather__current--details">
					<div className="weather__current--details-cell">
						<img className="weather__current--details-cell-icon" src={humidityIcon} alt="humidity icon" />
						<p>Humidity: {humidity}</p>
					</div>
					<div className="weather__current--details-cell">
						<img className="weather__current--details-cell-icon" src={windIcon} alt="wind icon" />
						<p>Wind: {wind}</p>
					</div>
					<div className="weather__current--details-cell">
						<img className="weather__current--details-cell-icon" src={pressureIcon} alt="pressure icon" />
						<p>Pressure: {pressure}</p>
					</div>
					<div className="weather__current--details-cell">
						<img
							className="weather__current--details-cell-icon"
							src={feelsLikeIcon}
							alt="temperature icon"
						/>
						<p>Feels like: {feelsLike.toFixed(1) + `\u00B0`}</p>
					</div>
				</section>
			</div>
		);
	}
}

export default CurrentWeather;
