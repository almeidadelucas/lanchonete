import React from 'react';
import Header from '../header';
import Footer from '../footer';
import './index.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="app-content">
        {children}
      </div>
      <Footer />
    </div>
  );
};
  
export default Layout;
  