import React from 'react';
import './App.css';

import Routes from './routes'

import CharacterContextProvider from './contexts/CharacterContext'

function App() {
	return (
		<div className="app">
			<CharacterContextProvider>
				<Routes />
			</CharacterContextProvider>
		</div>
	);
}

export default App;
