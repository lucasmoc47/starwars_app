import React from 'react';

import { Switch, Route } from 'react-router-dom'

import Character from '../../components/CharacterInfo'
import CharacterList from '../../components/CharacterList'
import NoCharacter from '../../components/NoCharacter'

import './styles.css'

export default function Home({ match }) {
	return (
		<Switch>
			<Route path={match.path} component={CharacterList} />
		</Switch>
	);
}
