import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../layout';
import Home from '../../features/home';
import Menu from '../../features/home';
import Cart from '../../features/home';

const Routers = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route path="/menu">
        <Layout>
          <Menu />
        </Layout>
      </Route>
      <Route path="/cart">
        <Layout>
          <Cart />
        </Layout>
      </Route>
    </Switch>
  );
};

export default Routers;
