import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../media/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    console.log('Usuário deslogado');
  };

  return (
    <header>
      <Link to="/" className='logo-img'>
        <img src={logo} alt="Logo" className="logo-img" />
      </Link>
      {isLoggedIn ? (
        <button id="logout" onClick={handleLogout}>
          Log out / 로그아웃
        </button>
      ) : (
        <>
          <Link to="/login" id="login">
            <button id="login">
              Log in / 로그인
            </button>
          </Link>
          <Link to="/cad">
            <button id="cad">
              Cadastrar-se / 회원가입
            </button>
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;
