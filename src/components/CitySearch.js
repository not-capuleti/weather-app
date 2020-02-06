import React, { Component } from 'react';

class CitySearch extends Component {
	render() {
		return (
			<form onSubmit={this.props.getCurrentWeather}>
				<input type="text" name="city" placeholder="City..." />
				<input type="text" name="country" placeholder="Country..." />
				<button>Check the weather</button>
			</form>
		);
	}
}

export default CitySearch;
