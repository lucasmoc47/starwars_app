import React from 'react';

import './styles.css'

export default function ErrorMessage(props) {
  return (
	<div className="container errorMessage">
		<h1>{props.message}</h1>
	</div>
  );
}
