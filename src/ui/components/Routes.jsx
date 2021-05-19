import React from 'react';
import '../App.css';
import { ShoppingCartPage } from '../pages/ShoppingCartPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ProductsListPage } from '../pages/ProductsListPage';
// import { OrderPage } from '../pages/OrderPage';

export const Routes = ({ products }) => {
  return (
    <Switch>
      <Route exact path={'/'} render={() => <ProductsListPage products={products} />} />
      <Route path={'/cart'} render={() => <ShoppingCartPage />} />
      {/* <Route path={'/order'} render={() => <OrderPage />} /> */}
      <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>} />
      <Redirect from={'*'} to={'/'}></Redirect>
    </Switch>
  );
};
