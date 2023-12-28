// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoPage from './components/TodoPage';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <TodoPage />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
