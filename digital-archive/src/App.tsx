import React from 'react';
import './App.css';
import Home from './pages/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Photographs from './pages/Photographs/Photographs';
import ThemedCollections from './pages/themedCollections/themedCollections';
import TaiwanMilitary from './pages/taiwanMilitary/taiwanMilitary';
import Graduations from './pages/Graduations/Graduations'
import FamilyPortraits from './pages/FamilyPortraits/FamilyPortraits';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/photographs" element={<Photographs/>}/>
          <Route path="/themed-collections" element={<ThemedCollections/>}/>
          <Route path="/taiwan-military" element={<TaiwanMilitary/>}/>
          <Route path="/graduations" element={<Graduations/>}/>
          <Route path="/family-portraits" element={<FamilyPortraits/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
