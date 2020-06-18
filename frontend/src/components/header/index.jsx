import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="menu">
      <div className="menu-left">
        <div className="menu-item">
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className="menu-right">
        <div className="menu-item">
          <Link to="/menu">Cardápio</Link>
        </div>
        <div className="menu-item">
          <Link to="/cart">Carrinho</Link>
        </div>
        <div className="menu-item">
          <div className="menu-avatar" />
        </div>
      </div>
    </div>
  );
};
  
export default Header;
  