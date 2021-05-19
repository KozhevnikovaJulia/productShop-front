import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './ui/App';
import { Provider } from 'react-redux';
import { store } from './bll/store';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
