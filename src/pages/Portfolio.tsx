import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';

export function Portfolio() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}