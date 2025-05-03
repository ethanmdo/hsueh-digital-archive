import React from 'react';
import './App.css';
import Home from './pages/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Photographs from './pages/Photographs/Photographs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/Photographs" element={<Photographs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
