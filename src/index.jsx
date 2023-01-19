import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import VerejneCislo from './components/VerejneCislo';
import Login from './components/Login';

const App = () => {
  return (
    <div className="container">

      <Login />
      <VerejneCislo />

    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
