import React from 'react';
import './App.css';
import Home from './pages/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Photographs from './pages/Photographs/Photographs';
import ThemedCollections from './pages/themedCollections/themedCollections';
import TaiwanMilitary from './pages/taiwanMilitary/taiwanMilitary';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/hsueh-digital-archive" element={<Home/>}/>
          <Route path="/photographs" element={<Photographs/>}/>
          <Route path="/themed-collections" element={<ThemedCollections/>}/>
          <Route path="/taiwan-military" element={<TaiwanMilitary/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
