import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';
import { OrderForm } from '../components/OrderForm';

export const OrderPage = () => {
  // const currentСustomerInfo = useSelector(state => state.app.currentСustomerInfo);
  // console.log(currentСustomerInfo);
  return (
    <div className='shoppingCart'>
      <OrderForm />
    </div>
  );
};
