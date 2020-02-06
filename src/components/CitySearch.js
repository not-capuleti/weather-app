import React, { Component } from 'react';
import Logo from '../assets/weather.svg';

class CitySearch extends Component {
	render() {
		return (
			<div className="city-search">
				<div className="city-search--logo">
					<img src={Logo} alt="cloud with sun logo" />
				</div>
				<form className="city-search--form">
					<input type="text" name="city" placeholder="Type in a city..." required />
				</form>
			</div>
			// <form onSubmit={this.props.getCurrentWeather}>
			// 	<input type="text" name="city" placeholder="City..." />
			// 	<input type="text" name="country" placeholder="Country..." />
			// 	<button>Check the weather</button>
			// </form>
		);
	}
}

export default CitySearch;
