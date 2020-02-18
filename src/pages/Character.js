import React from 'react';

import { useParams } from 'react-router-dom'

export default function Character(props) {

	const { characterName } = useParams()

	const character = props.characters.find(character => character.name === characterName)

	return (
		<>
			<div className="characterInfo container">
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
					<p>{character.homeworld}</p>
				</div>
				<div className="characterRow">
					<h3>Films: </h3>
					<p>{character.films.join(', ')}</p>
				</div>
				<div className="characterRow">
					<h3>Species: </h3>
					<p>{character.species.join(', ')}</p>
				</div>
			</div>
		</>
	);
}
