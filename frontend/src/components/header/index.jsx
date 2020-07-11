import React, { useState } from 'react';
import { singnInWithGoogle, signOut } from '../../utils/fireabse';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Avatar, Menu, MenuItem } from '@material-ui/core';
import { useSnackbar } from 'notistack';

import './index.css';

const Header = ({ currentUser }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [ anchorEl, setAnchorEl ] = useState(null);

  const handlePopover = event => {
    event ? setAnchorEl(event.currentTarget) : setAnchorEl(null); 
  }

  const success = action => enqueueSnackbar(`${action} realizado com sucesso!`, { variant: 'success' });
  const failed = message => enqueueSnackbar(message, { variant: 'error' });

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
            src={currentUser ? currentUser.photoURL : ''}
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
            {
              currentUser ? (
                <MenuItem onClick={() => {
                  signOut(success, failed);
                  handlePopover(null);
                }}>
                  Sing out
                </MenuItem>
              ) : (
                <MenuItem onClick={() => {
                  singnInWithGoogle(success, failed);
                  handlePopover(null);
                }}>
                  Sing in
                </MenuItem>
              )
            }
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  currentUser: state.authReducers.currentUser,
});

export default connect(mapStateToProps)(Header);
