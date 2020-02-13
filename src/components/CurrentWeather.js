import React, { Component } from 'react';

class CurrentWeather extends Component {
	render() {
		const { city, country, description, temperature, feelsLike, icon, humidity, pressure, wind } = this.props;
		return (
			<div className="weather__current">
				<section className="weather__current--main">
					<h2>{city}</h2>
					<h3>{country}</h3>
					<p>{temperature}</p>
					<p>{description}</p>
				</section>
				<section className="weather__current--details">
					<h3>Details</h3>
				</section>
			</div>
		);
	}
}

export default CurrentWeather;
