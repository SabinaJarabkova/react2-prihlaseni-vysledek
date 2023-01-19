import React, { useState, useEffect } from 'react';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		setErrorMessage('');
	}, [username, password]);

	const handleSubmit = async (e) => {
		e.preventDefault();
	}


	return (
		<section>
			<h1>Přihlášení</h1>

			{ errorMessage && <p className="error">{errorMessage}</p> }

			<form onSubmit={handleSubmit}>

			<div className="formField">
				<label htmlFor="username">Jméno</label>
				<input
					type="text"
					id="username"
					autoComplete="off"
					required
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>

			<div className="formField">
				<label htmlFor="password">Heslo</label>
				<input
					type="password"
					id="password"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<button>Přihlásit se</button>

			</form>
		</section>
	);
}

export default Login;