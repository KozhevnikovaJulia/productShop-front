import React, { useState, useEffect }  from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { setTotalPrise, changeTotalPrise } from '../../bll/reducer'


export const ShoppingCartItem = ({product}) => {
  const dispatch = useDispatch();  
  const [quantity, setQuantity] = useState(1)
  const sum = product.prise*quantity
  const itemsCount = useSelector(state => state.app.itemsCount)
  const totalPrise = itemsCount*product.prise
  const increaseOnClick = () => {
    dispatch(changeTotalPrise (product.prise, "increase"))
    setQuantity(quantity+1)
  }
  const decreaseOnClick = () => {
    dispatch(changeTotalPrise (product.prise, "decrease"))
    setQuantity(quantity-1)
  }
  useEffect(() => {
    dispatch(setTotalPrise (totalPrise))
  }, []);
  
  return (
    <div className="itemShoppingCart">
      <div><img src={product.img} /></div>
      <div>{product.title}{product.description}</div>
      <div>{product.description}</div>
      <h1>{sum} $</h1>
      <Button disabled={quantity<2 ? true : false} onClick={decreaseOnClick} color="inherit" type={'submit'} variant={'contained'}>-</Button>
      <div>{quantity}</div>
      <Button onClick={increaseOnClick} color="inherit" type={'submit'} variant={'contained'}>+</Button>
    </div>

  );
}

