import React, { useState, useEffect, createContext } from 'react';

const AuthContext = createContext({});



export const AuthProvider = ({children}) => {
	const [auth, setAuth] = useState();

	useEffect(() => {
		const userInfo = JSON.parse( localStorage.getItem('userinfo') );
		setAuth(userInfo)
	}, []);

	return (
		<AuthContext.Provider value={{ auth, setAuth}}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContext;