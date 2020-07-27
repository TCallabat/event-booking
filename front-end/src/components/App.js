/**
 * src\components\App.js
 */

/* Import modules */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

/* Import components */
import Auth from "./pages/Auth";
import Bookings from "./pages/Bookings";
import Events from "./pages/Events";
import Navbar from "./assets/navbar/Navbar";
import AuthContext from "../context/auth-context";

/* Import style */
import "./style.scss";

/* Component */
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			token: null,
			userId: null
		};
	}

	login = (token, userId) => {
		this.setState({ token: token, userId: userId });
	};

	logout = () => {
		this.setState({ token: null, userId: null });
	};

	render() {
		return (
			<Router>
				<AuthContext.Provider value={{ token: this.state.token, userId: this.state.userId, login: this.login, logout: this.logout }}>
					<Navbar />
					<main className="main-content">
						<Switch>
							{this.state.token && <Redirect from="/" to="/events" exact />}
							{this.state.token && (<Redirect from="/auth" to="/events" exact />)}
							{!this.state.token && (<Route path="/auth" component={Auth} />)}
							<Route path="/events" component={Events} />
							{this.state.token && (<Route path="/bookings" component={Bookings} />)}
							{!this.state.token && <Redirect to="/auth" exact />}
						</Switch>
					</main>
				</AuthContext.Provider>
			</Router>
		);
	}
};

export default App;
