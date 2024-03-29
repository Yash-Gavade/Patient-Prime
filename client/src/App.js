import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importing Pages
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import PrivateRoute from "./components/PrivateRoute";
import Appointment from "./pages/services/Appointment";
import Medicine from "./pages/services/Medicine";
import DashboardDoc from "./pages/DashboardDoc";

const App = () => {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<Switch>
					<Route path="/" exact component={Home} />
					<PrivateRoute
						path="/dashboard"
						exact
						component={Dashboard}
					/>
					<Route path="/signup" exact component={SignUp} />
					<PrivateRoute path="/profile" exact component={Profile} />
					<Route path="/login" exact component={Login} />

					<PrivateRoute
						path="/dashboard/medicine"
						exact
						component={Medicine}
					/>
					<PrivateRoute
						path="/dashboard/doctor"
						exact
						component={Appointment}
					/>
				
					<PrivateRoute
						path="/dashboardDoc"
						exact
						doc
						component={DashboardDoc}
					/>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
