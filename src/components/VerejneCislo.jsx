import React, { useState, useEffect } from 'react';

const VerejneCislo = () => {

	const [cislo, setCislo] = useState();

	const nacistData = async () => {
		const response = await fetch("https://random.zkusmo.eu/reliable");
		const data = await response.json();
		setCislo(data.randomNumber);
	}

	return (
		<section>
			<h1>Veřejné číslo: { cislo }</h1>
			<button onClick={nacistData}>Získej číslo</button>
		</section>
	);
}

export default VerejneCislo;