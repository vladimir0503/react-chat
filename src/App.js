import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Auth, Home } from './pages';

import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='*' element={<Auth />} />
        <Route path='/im' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
