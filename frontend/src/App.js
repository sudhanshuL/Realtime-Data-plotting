import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import ShowEquities from './components/ShowEquities';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import NavBarMenu from './components/NavBarMenu';
import AddEquities from './components/AddEquities';
import EquitiesDetail from './components/EquitiesDetail';
import UpdateEquities from './components/UpdateEquities';
import Csv from './components/Csv';
import Graphs from './components/Graphs';
function App() {
  return (
    document.body.style.backgroundColor = "#FFF9B0",
    <div className="App">
      
      <Router>
        <NavBarMenu />
        <Routes>
          <         Route path="/" element={<ShowEquities />} />
        </Routes>

        <Routes>
          <         Route path="/addEquities" element={<AddEquities />} />
        </Routes>
        <Routes>
          <         Route path="/csv" element={<Csv />} />
        </Routes>        
        <Routes>
          <         Route path="/up/:id/update" element={<UpdateEquities />} />
        </Routes>
        <Routes>
          <         Route path="/graphs" element={<Graphs />} />
        </Routes>
        <Routes>
          <         Route path="/de/:id" element={<EquitiesDetail />} />
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
