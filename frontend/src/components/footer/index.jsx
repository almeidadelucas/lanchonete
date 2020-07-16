import React from 'react';
import { Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import logo from '../../_assets/img/logo.svg'
import './index.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer-contacts">
        <Typography variant="h5">
          Redes Sociais
        </Typography>
        <div>
          <FacebookIcon className="footer-social-media" />
          <InstagramIcon className="footer-social-media" />
          <TwitterIcon className="footer-social-media" />
        </div>
      </div>
    </div>
  );
};
  
export default Footer;
  