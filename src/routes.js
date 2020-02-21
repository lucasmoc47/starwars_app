import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'

export default function Routes() {
	return (
		<Router basename="starwars_app">
			<Switch>
				<Route path="/characters" component={Home} />
				<Redirect from="*" to="/characters" />
			</Switch>
		</Router>
	);
}
