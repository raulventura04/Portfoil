import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Gamepad2 } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="bg-slate-900 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex space-x-6">
          <Link 
            to="/" 
            className={`flex items-center space-x-2 ${location.pathname === '/' ? 'text-emerald-400' : 'hover:text-emerald-400'}`}
          >
            <Code2 className="w-6 h-6" />
            <span>Portfólio</span>
          </Link>
          <Link 
            to="/store" 
            className={`flex items-center space-x-2 ${location.pathname === '/store' ? 'text-emerald-400' : 'hover:text-emerald-400'}`}
          >
            <Gamepad2 className="w-6 h-6" />
            <span>Game Store</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}