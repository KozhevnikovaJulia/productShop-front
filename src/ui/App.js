import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { Routes } from './components/Routes';
import { Header } from './components/Header';
import { HashRouter } from 'react-router-dom';
import { getProducts } from '../bll/reducer';

function App() {
  const dispatch = useDispatch()
  useEffect(() => { dispatch(getProducts()) }, [])
  const products = useSelector(state => state.app.products)
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes products={products} />
      </HashRouter>
    </div>
  );
}

export default App;
