import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import axios from 'axios';
import i18n from './i18n';
import i18next from 'i18next'

const lang = localStorage.getItem('lang') || 'en';
axios.defaults.headers.common['Accept-Language'] = lang;
const root = ReactDOM.createRoot(document.getElementById('root'));
i18next.changeLanguage(lang);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
