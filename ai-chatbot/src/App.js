import React from 'react';
import LandingPage from './LandingPage';
import Login from './pages/login/login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;