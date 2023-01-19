import React, { useState } from 'react';
import axios from "axios";
import useAuth from '../hooks/useAuth';

const ZabezpeceneCislo = () => {

	const {auth} = useAuth();
	const [cislo, setCislo] = useState();

	const nacistData = async () => {

		const response = await axios.get('https://random.zkusmo.eu/secured', {
			headers: {
				'Authorization': `Bearer ${auth.accessToken}`
			}
		});
		setCislo(response.data.randomNumber);
	}

	return (
		<section>
			<h1>Zabezpečené číslo: { cislo }</h1>
			{
				auth?.username
				? <button onClick={nacistData}>Získej číslo, {auth.username}</button>
				: <p>Nejdřív se přihlaš, ty oslíku!</p>
			}
		</section>
	);
}

export default ZabezpeceneCislo;