import React from 'react';
import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

export const Header = () => {
  const itemsCount = useSelector(state => state.app.itemsCount);
  return (
    <AppBar position='static' style={{ backgroundColor: 'rgb(185, 180, 180)' }}>
      <Toolbar className={'toolBur'}>
        <div className={'toolBur__iconBlock'}>
          <Typography variant='h6' style={{ marginTop: '8px' }}>
            <Link to='/'>SHOP</Link>
          </Typography>
        </div>
        <div className='toolBur__cartWrapper'>
          <Link to='/cart'>
            <Button color='inherit' type={'submit'} variant={'contained'}>
              Cart
            </Button>
          </Link>
          <div>{itemsCount}</div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
