import React from 'react';
import './App.css';

import Routes from './routes'

import CharacterContextProvider from './contexts/CharacterContext'

function App() {
	return (
		<div className="app">
			<div className="starBackground-left"></div>
			<div className="starBackground-right"></div>
			<CharacterContextProvider>
				<Routes />
			</CharacterContextProvider>
		</div>
	);
}

export default App;
