import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';
import { ShoppingCartItem } from '../components/ShoppingCartItem';
import { Paper, Grid, Button } from '@material-ui/core';
import { OrderForm } from '../../ui/components/OrderForm';
import { useHistory } from 'react-router-dom';

export const ShoppingCartPage = () => {
  const shoppingCart = useSelector(state => state.app.shoppingCart);
  const totalPrice = useSelector(state => state.app.totalPrice);
  const history = useHistory();
  return (
    <div className='shoppingCart'>
      <div className='shoppingCart__shoppingListWrapper'>
        <div className='shoppingCart__shoppingList'>
          {shoppingCart && shoppingCart.length === 0 ? (
            <h1>Сart is empty</h1>
          ) : (
            shoppingCart &&
            shoppingCart.map(item => {
              return (
                <Grid item>
                  <Paper
                    elevation={3}
                    style={{
                      width: '100%',
                      padding: '15px',
                      margin: '10px',
                      backgroundSize: '100% auto',
                    }}
                    key={item.product.id}
                  >
                    <ShoppingCartItem product={item.product} count={item.count} />
                  </Paper>
                </Grid>
              );
            })
          )}
        </div>
        <div className='shoppingCart__order'>
          <div>
            <Button
              color='inherit'
              type={'submit'}
              variant={'contained'}
              onClick={() => {
                history.push('/order');
              }}
            >
              Order
            </Button>
          </div>
          {/* <OrderForm /> */}
        </div>
      </div>

      <h1>Total: {totalPrice} </h1>
    </div>
  );
};
