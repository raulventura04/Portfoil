import { Game } from '../types/game';

export const games: Game[] = [
  {
    id: 1,
    title: "Aventuras Cibernéticas 2077",
    price: 299.99,
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800",
    description: "Um RPG imersivo em mundo aberto ambientado em um futuro distópico.",
    genre: "RPG",
    rating: 4.5
  },
  {
    id: 2,
    title: "Guerreiros da Galáxia",
    price: 249.99,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800",
    description: "Combates espaciais épicos com visuais deslumbrantes e jogabilidade intensa.",
    genre: "Ação",
    rating: 4.8
  },
  {
    id: 3,
    title: "Lendas Medievais",
    price: 199.99,
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800",
    description: "Uma aventura de fantasia através de reinos antigos e terras místicas.",
    genre: "Aventura",
    rating: 4.3
  }
];