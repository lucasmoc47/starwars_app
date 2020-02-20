import React, { Component, createContext } from 'react';
import axios from 'axios'

export const CharacterContext = createContext()

export default class CharacterContextProvider extends Component {
	state = {
		characters: [],
		planets: [],
		films: [],
		species: [],
		loading: true
	}

	async componentDidMount() {
		let totalPeople, totalPlanets, totalFilms, totalSpecies = []

		let peopleResponse = await axios('https://swapi.co/api/people/') //get people
		totalPeople = peopleResponse.data.results

		while(peopleResponse.data.next) {
			peopleResponse = await axios(peopleResponse.data.next)
			totalPeople = totalPeople.concat(peopleResponse.data.results)
		}

		let planetsResponse = await axios('https://swapi.co/api/planets/') //get planets
		totalPlanets = planetsResponse.data.results

		while(planetsResponse.data.next) {
			planetsResponse = await axios(planetsResponse.data.next)
			totalPlanets = totalPlanets.concat(planetsResponse.data.results)
		}

		let filmsResponse = await axios('https://swapi.co/api/films/') //get films
		totalFilms = filmsResponse.data.results

		while(filmsResponse.data.next) {
			filmsResponse = await axios(filmsResponse.data.next)
			totalFilms = totalFilms.concat(filmsResponse.data.results)
		}

		let speciesResponse = await axios('https://swapi.co/api/species/') //get species
		totalSpecies = speciesResponse.data.results

		while(speciesResponse.data.next) {
			speciesResponse = await axios(speciesResponse.data.next)
			totalSpecies = totalSpecies.concat(speciesResponse.data.results)
		}

		this.setState({ 
			characters: totalPeople, 
			planets: totalPlanets,
			films: totalFilms,
			species: totalSpecies,
			loading: false 
		})
	}

	render() {
		return (
			<CharacterContext.Provider value={{ ...this.state }}>
				{this.props.children}
			</CharacterContext.Provider>
		)
	}
}