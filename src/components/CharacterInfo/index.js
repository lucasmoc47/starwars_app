import React from 'react'

import { useParams } from 'react-router-dom'

import { CharacterContext } from '../../contexts/CharacterContext'

import InfoItem from '../InfoItem'

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
				const characterHomeworld = planets.find(planet => character.homeworld === planet.url).name
				const characterSpecies = character.species.map(characterSpecie =>
					species.find(specie => characterSpecie === specie.url).name
				)

				return (
					<div className="container">
						<div className="characterInfo">
							<h1>Character Information</h1>
							<InfoItem title="Name: " info={character.name} />
							<InfoItem title="Height: " info={character.height} additional="cm" />
							<InfoItem title="Mass: " info={character.mass} additional="kg" />
							<InfoItem title="Hair Color: " info={character.hair_color} />
							<InfoItem title="Skin Color: " info={character.skin_color} />
							<InfoItem title="Eye Color: " info={character.eye_color} />
							<InfoItem title="Birth Year: " info={character.birth_year} />
							<InfoItem title="Gender: " info={character.gender} />
							<InfoItem title="HomeWorld: " info={characterHomeworld} />
							<InfoItem title="Films: " info={characterFilms.join(', ')} />
							<InfoItem title="Species: " info={characterSpecies.join(', ')} />
						</div>
					</div>
				)
			}}
		</CharacterContext.Consumer>
	)
}