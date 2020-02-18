import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Characters from './pages/Characters'

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/people" component={Characters} />
				<Redirect exact from="/" to="/people" />
			</Switch>
		</Router>
	);
}
