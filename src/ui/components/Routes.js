import React  from 'react';
import '../App.css';
import { ShoppingCartPage } from '../pages/ShoppingCartPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ProductsListPage } from '../pages/ProductsListPage';

export const Routes = ({products}) => {
  return (
    <Switch>
    <Route exact path={"/"} render={() => <ProductsListPage products={products}/>} />
    <Route path={"/cart"} render={() => <ShoppingCartPage />} />
    <Route path={"/404"} render={() => <h1>404: PAGE NOT FOUND</h1>} />
    <Redirect from={"*"} to={"/"}> </Redirect>
  </Switch>
  );
}

