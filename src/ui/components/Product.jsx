import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { addProductToShoppingCart } from '../../bll/reducer';

export const Product = ({ product }) => {
  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(addProductToShoppingCart({ product: product, count: 1 }));
  };
  return (
    <div className='product'>
      <div className='product__imageWrapper'>
        <img src={product.img} />
      </div>
      <h1>{product.title}</h1>
      <div>{product.description}</div>
      <h1>{product.price} $</h1>
      <Button onClick={addProductToCart} color='inherit' type={'submit'} variant={'contained'}>
        Add to Cart
      </Button>
    </div>
  );
};
