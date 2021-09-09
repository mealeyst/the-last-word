import React from 'react';
import ReactDOM from 'react-dom';
import PageView from './04_templates/Page/Page';
import { menus } from './04_templates/Page/data'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <PageView menus={menus} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
