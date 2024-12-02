import React from 'react';
import { GameGrid } from '../components/GameGrid';

export function GameStore() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Game Store</h1>
          <p className="text-lg opacity-90">Discover amazing games at great prices</p>
        </div>
      </div>
      <GameGrid />
    </div>
  );
}