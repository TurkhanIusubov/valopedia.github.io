import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/App.css';

// COMPONENTS
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Agents from './components/Agents/Agents.jsx';
import Weapons from './components/Weapons/Weapons.jsx';
import Maps from './components/Maps/Maps.jsx';
import Error from './components/Error/Error';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agents' element={<Agents />} />
        <Route path='/weapons' element={<Weapons />} />
        <Route path='/maps' element={<Maps />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
