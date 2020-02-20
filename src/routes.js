import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/people" component={Home} />
				<Redirect exact from="/" to="/people" />
			</Switch>
		</Router>
	);
}
