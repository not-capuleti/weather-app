import React, { Component } from 'react';
import Logo from '../assets/cloudy-day-1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

class CitySearch extends Component {
	render() {
		return (
			<div className="city-search">
				<h1 className="city-search__heading">The Weather App</h1>
				<div className="city-search__logo">
					<img className="city-search__logo__img" src={Logo} alt="cloud with sun logo" />
				</div>
				<form className="city-search__form">
					<input
						className="city-search__form__input"
						type="text"
						name="city"
						placeholder="Type in a city..."
						required
					/>
					<FontAwesomeIcon className="city-search__form__icon" icon={faSearch} />
				</form>
				<div className="city-search__location">
					<p className="city-search__location__text">or</p>
					<button className="city-search__location__btn">
						Use your location{' '}
						<FontAwesomeIcon className="city-search__form__btn__icon" icon={faGlobeEurope} />
					</button>
				</div>
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
