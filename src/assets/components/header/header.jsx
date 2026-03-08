import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../media/logo.png';

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
      <img src={logo} alt="Logo" className="logo-img" />
      
      {isLoggedIn ? (
        <button id="logout" onClick={handleLogout}>
          Log out / 로그아웃
        </button>
      ) : (
        <>
          <button id="login" onClick={() => window.location.href = '/pages/login.php'}>
            Log in / 로그인
          </button>
          <button id="cad" onClick={() => window.location.href = '/pages/cad.php'}>
            Cadastrar-se / 회원가입
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
