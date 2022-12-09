import React from 'react';
import './App.css';
import Home from './routes/home/Home';
import Personajes from './routes/personaje/Personaje';
import Personajeid from './routes/personajeid/Personajeid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/personajes/:id" element={<Personajeid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
