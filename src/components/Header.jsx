import React from 'react';
import "../styles/components/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="./logo.png" alt="logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/boost">Sistema de Boost</a></li>
          <li><a href="#">Provações</a></li>
          <li><a href="#">Mapas</a></li>
          <li><a href="#">Wanted Pirates</a></li>
        </ul>
      </nav>
    </header>
  );
}
