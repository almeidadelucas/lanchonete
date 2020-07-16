import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../layout';
import Home from '../../features/home';
import Menu from '../../features/menu';
import Cart from '../../features/cart';

const Routers = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route path="/menu" exact>
        <Layout>
          <Menu />
        </Layout>
      </Route>
      <Route path="/cart" exact>
        <Layout>
          <Cart />
        </Layout>
      </Route>
    </Switch>
  );
};

export default Routers;
