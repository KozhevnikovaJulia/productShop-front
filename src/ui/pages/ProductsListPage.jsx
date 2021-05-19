import React from 'react';
import '../App.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Product } from '../components/Product';

export const ProductsListPage = ({ products }) => {
  return (
    <>
      <Grid className='container' container spacing={3}>
        {products &&
          products.map(product => {
            return (
              <Grid item>
                <Paper elevation={3} style={{ width: '250px', padding: '15px', backgroundSize: '100% auto' }} key={product.id}>
                  <Product product={product} />
                </Paper>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};
