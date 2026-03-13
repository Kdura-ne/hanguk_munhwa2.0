import React from 'react';
import { href, Link } from 'react-router-dom';
import './nav.css';

const Navigation = () => {
  const navItems = [
    { href: '/hist', label: 'História', hover: '역사' },
    { href: '/gastro', label: 'Comida e Gastronomia', hover: '음식과 요리' },
    { href: '/arte', label: 'Arte e Música', hover: '예술과 음악' },
    { href: '/vest', label: 'Vestuário Tradicional', hover: '전통 의상' },
    { href: '/celeb', label: 'Festivais e Celebrações', hover: '축제와 행사' },
    { href: '/esportes', label: 'Esportes e Artes Marciais', hover: '스포츠와 무술' },
    { href: '/quiz', label: 'Quiz', hover: '퀴즈' },
  ];

  return (
    <nav>
      {navItems.map((item, index) => (
        <Link key={index} to={item.href} className="topics" data-hover={item.hover}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
