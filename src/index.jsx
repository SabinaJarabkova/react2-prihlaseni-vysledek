import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import VerejneCislo from './components/VerejneCislo';
import ZabezpeceneCislo from './components/ZabezpeceneCislo';
import Login from './components/Login';

import { AuthProvider } from './context/AuthProvider';

const App = () => {
  return (
    <div className="container">
      <AuthProvider>

        <Login />
        <ZabezpeceneCislo />
        <VerejneCislo />

      </AuthProvider>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
