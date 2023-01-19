import React, { useState } from 'react';

import axios from 'axios';


const VerejneCislo = () => {

	const [cislo, setCislo] = useState();

	const nacistData = async () => {

		try {
			const response = await axios.get("https://random.zkusmo.eu/shaky");
			setCislo(response.data.randomNumber);
		} catch (error) {
			console.log(error)
		}

	}

	return (
		<section>
			<h1>Veřejné číslo: { cislo }</h1>
			<button onClick={nacistData}>Získej číslo</button>
		</section>
	);
}

export default VerejneCislo;