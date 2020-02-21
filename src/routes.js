import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'

export default function Routes() {
	return (
		<Router basename="dynamic_routing">
			<Switch>
				<Route path="/characters" component={Home} />
				<Redirect exact from="/" to="/characters" />
			</Switch>
		</Router>
	);
}
