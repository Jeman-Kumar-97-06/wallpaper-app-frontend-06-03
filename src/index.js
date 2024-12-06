import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './contexts/AuthContext';
import { WallsContextProvider } from './contexts/WallsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WallsContextProvider>
        <App />
      </WallsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
