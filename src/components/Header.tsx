import React from 'react';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-emerald-500" />
            <span className="text-2xl font-bold">Portfolio</span>
          </div>
          <nav className="flex space-x-6">
            <a href="#about" className="hover:text-emerald-400 transition">Sobre</a>
            <a href="#skills" className="hover:text-emerald-400 transition">Habilidades</a>
            <a href="#projects" className="hover:text-emerald-400 transition">Projetos</a>
            <div className="flex space-x-4">
              <a href="https://github.com/raulventura04?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/raul-ventura-6502a8234/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:raulventura04@gmail.com" className="hover:text-emerald-400 transition">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}