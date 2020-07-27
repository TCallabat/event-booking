import React from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../../../context/auth-context";

import "./style.scss";

function Navbar(props) {
	return (
		<AuthContext.Consumer>
			{context => {
				return (
					<header className="navbar">
						<div className="navbar__title">
							<h1>Events Booking</h1>
						</div>
						<nav className="navbar__items">
							<ul>
								<li>
									<NavLink to="/events">Events</NavLink>
								</li>
								{!context.token && (
									<li>
										<NavLink to="/auth">Login</NavLink>
									</li>
								)}
								{context.token && (
									<React.Fragment>
										<li>
											<NavLink to="/bookings">Bookings</NavLink>
										</li>
										<li>
											<button onClick={context.logout}>Logout</button>
										</li>
									</React.Fragment>
								)}

							</ul>
						</nav>
					</header>
				);
			}}
		</AuthContext.Consumer>
	);
};

export default Navbar;