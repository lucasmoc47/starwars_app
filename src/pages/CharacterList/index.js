import React, { useState, useEffect } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Character from '../Character'

import './styles.css'

export default function CharacterList({ match }) {
	const [characters, setCharacters] = useState([])
	/* const [planets, setPlanets] = useState([])
	const [films, setFilms] = useState([])
	const [species, setSpecies] = useState([]) */

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		let totalCharacters, totalPlanets, totalFilms, totalSpecies = []
		let response = {}

		async function fetchData() {
			//get people
			response = await axios('https://swapi.co/api/people/')
			totalCharacters = response.data.results
			
			/* //get planets
			response = await axios('https://swapi.co/api/planets/')
			totalPlanets = response.data.results
			
			//get films
			response = await axios('https://swapi.co/api/films/')
			totalFilms = response.data.results
			
			//get species
			response = await axios('https://swapi.co/api/species/')
			totalSpecies = response.data.results */
			
			/* while(data.next){
				({data} = await axios(data.next))

				total_results = total_results.concat(data.results)
			}*/

			setCharacters(totalCharacters)
			/* setPlanets(totalPlanets)
			setFilms(totalFilms)
			setSpecies(totalSpecies) */

			setLoading(false)
		}

		fetchData()
	}, [])

	function onWheel(e) {
		var container = document.getElementById('characterList')
		var containerScrollPosition = document.getElementById('characterList').scrollLeft
		container.scrollTo({
			top: 0,
			left: containerScrollPosition + e.deltaY,
			behaviour: 'smooth'
		})
	}

	if (loading) return <h1>Loading</h1>

	return (
		<>
			<ul className="characterList container" id="characterList" onWheel={onWheel}>
				{characters.map(character => (
					<li key={character.name}>
						<Link to={`${match.url}/${character.name}`}>
							<span>{character.name}</span>
						</Link>
					</li>
				))}
			</ul>

			<Switch>
				<Route path={`${match.path}/:characterName`}><Character characters={characters} /></Route>
				<Route path={match.path}><h3 className="container">Select a character</h3></Route>
			</Switch>
		</>
	);
}
