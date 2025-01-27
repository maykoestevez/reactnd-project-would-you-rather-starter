import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './App.css';
import middleware from './middleware';
import { createStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

const container = document.getElementById('root');
const root = createRoot(container);
const store = createStore(reducers, middleware);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
    </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
