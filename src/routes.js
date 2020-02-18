import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import CharacterList from './pages/CharacterList'

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/people" component={CharacterList} />
				<Redirect exact from="/" to="/people" />
			</Switch>
		</Router>
	);
}
