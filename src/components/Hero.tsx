import React from 'react';
import { Terminal } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <Terminal className="w-8 h-8 text-emerald-500" />
              <span className="text-emerald-500 font-mono">Backend Developer</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Raul Ventura
            </h1>
            <p className="text-lg mb-8 text-slate-300 leading-relaxed">
              Desenvolvedor backend em transição de carreira, combinando o pensamento analítico da biologia 
              com a paixão por criar soluções tecnológicas inovadoras.
            </p>
            <div className="flex space-x-4">
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition">
                Ver Projetos
              </button>
              <button className="border border-emerald-600 text-emerald-500 px-6 py-3 rounded-lg font-bold hover:bg-emerald-600 hover:text-white transition">
                Contato
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg blur opacity-75"></div>
              <img 
                src="/profile.jpg"
                alt="Raul Ventura"
                className="relative rounded-lg shadow-2xl max-w-md w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}