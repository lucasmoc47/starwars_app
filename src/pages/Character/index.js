import React from 'react';

import { useParams } from 'react-router-dom'

import { CharacterContext } from '../../contexts/CharacterContext'

import './styles.css'

export default function Character() {
	const { characterName } = useParams()

	return (
		<CharacterContext.Consumer>
			{characterContext => {
				const { characters, films, planets, species } = characterContext

				const character = characters.find(character => character.name === characterName)
				const characterFilms = character.films.map(characterFilm =>
					films.find(film => characterFilm === film.url).title
				)
				let characterHomeworld = planets.find(planet => character.homeworld === planet.url).name
				const characterSpecies = character.species.map(characterSpecie =>
					species.find(specie => characterSpecie === specie.url).name
				)

				return (
					<div className="container">
						<div className="characterInfo">
							<h2>Character Information</h2>
							<div className="characterRow">
								<h3>Name: </h3>
								<p>{character.name}</p>
							</div>
							<div className="characterRow">
								<h3>Height: </h3>
								<p>{character.height}</p>
							</div>
							<div className="characterRow">
								<h3>Mass: </h3>
								<p>{character.mass}</p>
							</div>
							<div className="characterRow">
								<h3>Hair Color: </h3>
								<p>{character.hair_color}</p>
							</div>
							<div className="characterRow">
								<h3>Skin Color: </h3>
								<p>{character.skin_color}</p>
							</div>
							<div className="characterRow">
								<h3>Eye Color: </h3>
								<p>{character.eye_color}</p>
							</div>
							<div className="characterRow">
								<h3>Birth Year: </h3>
								<p>{character.birth_year}</p>
							</div>
							<div className="characterRow">
								<h3>Gender: </h3>
								<p>{character.gender}</p>
							</div>
							<div className="characterRow">
								<h3>Homeworld: </h3>
								<p>{characterHomeworld}</p>
							</div>
							<div className="characterRow">
								<h3>Films: </h3>
								<p>{characterFilms.join(', ')}</p>
							</div>
							<div className="characterRow">
								<h3>Species: </h3>
								<p>{characterSpecies.join(', ')}</p>
							</div>
						</div>
					</div>
				)
			}}
		</CharacterContext.Consumer>
	);
}
