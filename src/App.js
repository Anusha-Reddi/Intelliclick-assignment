import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CitiesTable from './components/CitiesTable';
import './App.css'
import WeatherPage from './components/WeatherPage';

const App = () => {
  return (
    <div className="main-container">
    <Router>
      <Routes>
        <Route path="/" element={<CitiesTable />} />
        <Route path="/weather/:cityName" element={<WeatherPage />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;