import './App.css';
import React from 'react'
import Dashboard from './pages/dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/d" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
