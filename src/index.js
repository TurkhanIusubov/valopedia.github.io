import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

import { ValoApiProvider } from './Context/ValoApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ValoApiProvider>
    <App />
  </ValoApiProvider>
);
