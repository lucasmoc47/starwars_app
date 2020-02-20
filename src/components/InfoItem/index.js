import React from 'react'

import './styles.css'

export default function InfoItem(props) {
	return (
		<div className="infoItem">
			<h3 className="title">{props.title}</h3>
			<p className="info">{props.info}</p>
			{props.additional && <p className="additional">{props.additional}</p>}
		</div>
	)
}
