import React, { Component } from 'react';

class Forecast extends Component {
	getDayOfWeek = (date) => {
		const numberOfDay = new Date(date).getDay();
		const namesOfDay = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
		return namesOfDay[numberOfDay];
	};

	render() {
		const { forecast5days, setIcon } = this.props;
		return (
			<div className="weather__forecast">
				{forecast5days.map(
					(day, idx) =>
						day.dt_txt.includes('12:00') ? (
							<section className="weather__forecast--day" key={idx}>
								<p className="weather__forecast--day-name">{this.getDayOfWeek(day.dt_txt)}</p>
								<p className="weather__forecast--day-date">{day.dt_txt.split(' ').slice(0, 1)}</p>
								<img className="weather__forecast--day-icon" alt="" src={setIcon(day.weather[0].id)} />
								<p className="weather__forecast--day-temperature">
									{Math.floor(day.main.temp) + `\u00B0`}
								</p>
							</section>
						) : null
				)}
			</div>
		);
	}
}

export default Forecast;
