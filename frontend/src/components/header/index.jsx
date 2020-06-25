import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Avatar, Menu, MenuItem } from '@material-ui/core';
import './index.css';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopover = event => {
    event ? setAnchorEl(event.currentTarget) : setAnchorEl(null); 
  }

  return (
    <AppBar position="static">
      <Toolbar className="header">
        <div className="header-left">
          <Link to="/" className="header-item">
            Home
          </Link>
        </div>
        <div className="header-right">
          <Link to="/menu" className="header-item">
            Cardápio
          </Link>
          <Link to="/cart" className="header-item">
            Carrinho
          </Link>
          <Avatar 
            className="header-avatar"
            onMouseEnter={handlePopover}
          />
          <Menu
            anchorEl={anchorEl}
            open={!!anchorEl}
            onClose={() => handlePopover(null)}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            className="header-avatar-menu"
          >
            <MenuItem onClick={() => handlePopover(null)}>Sing in</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};
  
export default Header;
