import React from 'react';
import './App.css';
import Home from './pages/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Photographs from './pages/photographs/photographs';
import ThemedCollections from './pages/themedCollections/themedCollections'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/hsueh-digital-archive" element={<Home/>}/>
          <Route path="/photographs" element={<Photographs/>}/>
          <Route path="/themed-collections" element={<ThemedCollections/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
