import React from 'react';
import './nav.css';

const Navigation = () => {
  const navItems = [
    { href: '#/hist', label: 'História', hover: '역사' },
    { href: '#/food', label: 'Comida e Gastronomia', hover: '음식과 요리' },
    { href: '#/art', label: 'Arte e Música', hover: '예술과 음악' },
    { href: '#/clothes', label: 'Vestuário Tradicional', hover: '전통 의상' },
    { href: '#/celeb', label: 'Festivais e Celebrações', hover: '축제와 행사' },
    { href: '#/sports', label: 'Esportes e Artes Marciais', hover: '스포츠와 무술' },
    { href: '#/quiz', label: 'Quiz', hover: '퀴즈'},
  ];

  return (
    <nav>
      {navItems.map((item, index) => (
        <a key={index} href={item.href} className="topics" data-hover={item.hover}>
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
