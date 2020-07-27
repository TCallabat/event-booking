import React from "react";

import "./style.scss";

function Event(props) {
	const EventItem = props => {
		return (
			<li key={props.eventId} className="event-list__item">
				<div>
					<h1>
						{props.title}
					</h1>
					<h2>
						{new Date(props.date).toLocaleDateString()}
					</h2>
				</div>
				<div>
					{props.userId === props.creatorId ? (
						<p>Your the owner of this event.</p>
					) : (
							<button className="btn" onClick={props.onDetail.bind(this, props.eventId)}>
								Details
							</button>
						)}
				</div>
			</li>
		)
	};

	const EventList = props.events.map(event => {
		return (
			<EventItem
				key={event._id}
				eventId={event._id}
				title={event.title}
				price={event.price}
				date={event.date}
				userId={props.authUserId}
				creatorId={event.creator._id}
				onDetail={props.onViewDetail}
			/>
		);
	});

	return (
		<React.Fragment>
			<h2 className="event-number">
				{props.events.length} event(s) created
			</h2>
			<ul className="event-list">
				{EventList}
			</ul>
		</React.Fragment>


	);
};

export default Event;