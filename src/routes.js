import React from 'react';

import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'

export default function Routes() {
	return (
		<Router basename="/">
			<Switch>
				<Route path="/characters" component={Home} />
				<Redirect from="*" to="/characters" />
			</Switch>
		</Router>
	);
}
