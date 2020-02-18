import React, { useState, useEffect } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Character from './Character'

export default function Characters({ match }) {
	const [characters, setCharacter] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios('https://swapi.co/api/people/')

			setCharacter(res.data.results)
			setLoading(false)
		}

		fetchData()
	}, [])

	if (loading)
		return <h1>Loading</h1>

	return (
		<>
			<ul className="characterList container">
				{characters.map(character => (
					<li key={character.name}>
						<Link to={`${match.url}/${character.name}`}>{character.name}</Link>
					</li>
				))}
			</ul>

			<Switch>
				<Route path={`${match.path}/:characterName`}><Character characters={characters}/></Route>
				<Route path={match.path}><h3 className="container">Select a character</h3></Route>
			</Switch>
		</>
	);
}
