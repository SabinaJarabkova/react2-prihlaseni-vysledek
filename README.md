# Autorizace, Axios, Context, Protected Routes

**Používáme API:**
https://random.zkusmo.eu

**Dokumentace:**
https://random.zkusmo.eu/swagger-ui

**Endpointy:**
- GET /reliable
- GET /shaky
- GET /secured
- POST /login

**Přihlášení:**
```json
{
  "username": "czechita",
  "password": "react2"
}
```

## Opáčko Fetche

- ukázat jednoduchý fetch
- ukázat jak by se dělal POST request
- (dokumentace)[https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch]

```js
const response = await fetch('https://web.com', {
  method: 'POST',
  cache: 'no-cache',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data),
})
```

---

## Axios
- Axios - jednodušší práce (ale není nutné)
- npm install axios
- request pomocí Axios

```js
const response = await axios.post('https://web.com', data)
```

- nemusíme dělat reponse.json()
- maličko jiný handling chyb

### Axios instance

- mnoho míst, kde mám requesty - vytvoříme instanci Axiosu, abychom nemuseli pořád opakovat BASE_URL

```js
import axios from 'axios'

const client =  axios.create({
  baseURL: "https://random.zkusmo.eu",
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
  }
});
```

- naimportujeme jako apiClient a používáme
- případně můžeme ještě udělat přímo metody

```js
import axios from 'axios'

const client =  axios.create({
  baseURL: "https://random.zkusmo.eu",
})

export default {

  getReliableNumber() {
    return client.get('/reliable');
  }

}
```

---

## Login

- budeme potřeboval login pro /secure
- vyrobíme stránku s loginem a jen vypíšeme do konzole, co vrací server

---

## Context / AuthProvider

- informace vrácené po přihlášení budeme potřebovat někam uložit
- globální context

```js
import React, { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
```

- v App použijeme následovně

```js
import { AuthProvider } from './context/AuthProvider';

const App = () => {
  return (
    <div className="container">
      <AuthProvider>

      </AuthProvider>
    </div>
  );
};
```

- v komponentě máme přístup k informacím přes

```js
import React, {useContext} from 'react';
import AuthContext from '../context/AuthProvider';

const Komponenta1 = () => {
  const {auth} = useContext(AuthContext);
}

export default Komponenta1;
```

- otrava pořád importovat kontext, uděláme si hook useAuth

```js
import React, {useContext} from "react";
import AuthContext from '../context/AuthProvider';

const useAuth = () => {
  return useContext(AuthContext);
}

export default useAuth;
```

- pak můžeme v aplikaci používat jen

```js
import useAuth from '../hooks/useAuth';
const {auth} = useAuth();
```

---

## Posílání tokenu

```js
axios.get('/secured', {
  headers: {
    "Authorization": `Bearer ${token}`
  }
});
```


---

## Abort controller

```js
let isMounted = true;
const controller = new AbortController();

const response = await axios.get('/whatever', {
  signal: constroller.signal
})

isMounted && setWhatever(response.data);

 // cleanup
 isMounted = false;
 controller.abort();
```


---

## Router

```shell
npm install react-router-dom
```

```js
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
```

- a v App bude `<Outlet />`, kam se doplní vnořené komponenty
