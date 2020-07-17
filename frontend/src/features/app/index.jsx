import React from 'react';
import Routers from '../../components/routers';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { store } from '../../store';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <SnackbarProvider maxSnack={3}>
        <Provider store={ store }>
          <div className="App">
            <Routers />
          </div>
        </Provider>
      </SnackbarProvider>
    </BrowserRouter>
  );
};
  
export default App;
