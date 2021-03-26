import React, { useState, useEffect }  from 'react';
import '../App.css';
import { useSelector } from 'react-redux';
import { ShoppingCartItem } from '../components/ShoppingCartItem';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import{ OrderForm } from '../../ui/components/OrderForm'


export const ShoppingCartPage = () => {
  const shoppingCart = useSelector(state => state.app.shoppingCart)
  const totalPrise = useSelector(state => state.app.totalPrise)
  return (
    <div className="shoppingCart">
      <div className="shoppingListWrapper">
        <div className="shoppingList">
          {shoppingCart.length === 0
            ? <h1>Сart is empty</h1>
            : shoppingCart.map((product) => {
              return <Grid item >
                <Paper elevation={3} style={{
                  width: "100%", padding: "15px",
                  margin:"10px",
                  backgroundSize: "100% auto"
                }}
                  key={product.id}>
                  <ShoppingCartItem product={product} />
                </Paper>
              </Grid>
            })
          }
        </div>
        <div className="order">
          <OrderForm/>
        </div>
      </div>
      
      <h1>Total: {totalPrise} </h1>
    </div>
  );
}
