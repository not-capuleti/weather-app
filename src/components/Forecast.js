import React, { Component } from 'react';

class Forecast extends Component {
	render() {
		const { forecast5days } = this.props;
		return (
			<div className="weather__forecast">
				{forecast5days.map((day, idx) => (idx > 0 && idx < 6 ? <p key={idx}>{day.dt_txt}</p> : null))}
			</div>
		);
	}
}

export default Forecast;
