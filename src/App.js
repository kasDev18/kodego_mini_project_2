import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductCards from './components/ProductCards/ProductCards';
import Home from './Pages/Home/Home';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={ProductCards}>
            Products
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
