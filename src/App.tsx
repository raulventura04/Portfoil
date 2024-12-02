import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Portfolio } from './pages/Portfolio';
import { GameStore } from './pages/GameStore';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/store" element={<GameStore />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;