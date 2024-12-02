import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Game } from '../types/game';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img src={game.imageUrl} alt={game.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{game.title}</h3>
        <div className="flex items-center mb-2">
          <Star className="w-5 h-5 text-emerald-400 fill-current" />
          <span className="ml-1 text-gray-600">{game.rating}</span>
          <span className="ml-2 text-sm text-gray-500">{game.genre}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{game.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-emerald-600">{formatPrice(game.price)}</span>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-emerald-700 transition">
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}