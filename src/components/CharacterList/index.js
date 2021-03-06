import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import CharacterInfo from '../CharacterInfo'
import ErrorMessage from '../ErrorMessage'

import { CharacterContext } from '../../contexts/CharacterContext'

import loadingGif from '../../assets/loading.gif'

import './styles.css'

export default function CharacterList({ match }) {

	function onWheel(e) {
		var container = document.getElementById('characterList')
		var containerScrollPosition = document.getElementById('characterList').scrollLeft
		
		container.scrollTo({
			top: 0,
			left: containerScrollPosition + e.deltaY/4,
			behaviour: 'smooth'
		})
	}

	return (
		<CharacterContext.Consumer>
			{characterContext => {
				const { characters, loading } = characterContext

				if(!characters) {
					return <ErrorMessage message="DataBase Error" />
				}

				if (loading) 
					return (
						<div className="loading">
							<img src={loadingGif} alt=""/>
						</div>
					)

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
							<Route path={`${match.path}/:characterName`} component={CharacterInfo} />
							<Route path={match.path}><ErrorMessage message="Select a Character" /></Route>
						</Switch>
					</>
				)
			}}
		</CharacterContext.Consumer>
	)
}
