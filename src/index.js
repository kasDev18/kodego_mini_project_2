import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav/Nav';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import ProductCards from './Pages/Products/ProductCards/ProductCards';
import ProductCart from './Pages/Products/ProductCart/ProductCart';
import Home from './Pages/Home/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={ProductCards}>
        Products
      </Route>
    </Routes>
    <ProductCart />
    <ProductCards />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
