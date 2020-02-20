import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'

export default function Routes() {
	return (
		<Router basename="/characters">
			<Switch>
				<Route path="/" component={Home} />
			</Switch>
		</Router>
	);
}
