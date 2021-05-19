import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { Routes } from './components/Routes';
import { Header } from './components/Header';
import { getProducts } from '../bll/reducer';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const currentСustomerInfo = useSelector(state => state.app.currentСustomerInfo);
  const ddd = useSelector(state => state.app.ddd);
  const shoppingCart = useSelector(state => state.app.shoppingCart);
  const totalPrice = useSelector(state => state.app.totalPrice);
  const itemsCount = useSelector(state => state.app.itemsCount);

  const products = useSelector(state => state.app.products);

  console.log(itemsCount);

  return (
    <div className='App'>
      <Header />
      <Routes products={products} />
    </div>
  );
};

export default App;
