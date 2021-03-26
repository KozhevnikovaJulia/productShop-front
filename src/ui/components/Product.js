import React  from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToShoppingCart } from '../../bll/reducer'


export const Product = ({product}) => {
  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(addProductToShoppingCart (product))
  }
  return (
    <div className="product">
      <div className="ImageWrapper"> <img src={product.img}/></div>
      <h1>{product.title}</h1>
      <div>{product.description}</div>
      <h1>{product.prise} $</h1>
      <Button onClick = {addProductToCart} color="inherit" type={'submit'} variant={'contained'}>Add to Cart</Button>
    </div>
  );
}
