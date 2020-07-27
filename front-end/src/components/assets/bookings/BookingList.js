import React from "react";

import "./style.scss";

function Booking(props) {
	return (
		<ul className="booking-list">
			{props.bookings.map(booking => {
				return (
					<li key={booking._id} className="booking-list__item">
						<div className="booking-list__data">
							<h1>{booking.event.title}</h1>
							<h2>{new Date(booking.event.date).toLocaleDateString()}</h2>
							<p>{booking.event.description}</p>
						</div>
						<div className="booking-list__actions">
							<button className="btn" onClick={props.onDelete.bind(this, booking._id)}>Cancel</button>
						</div>
					</li>
				);
			})}
		</ul>
	)
};

export default Booking;
