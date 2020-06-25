import React from 'react';
import Routers from '../../components/routers';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routers />
      </div>
    </BrowserRouter>
  );
};
  
export default App;
