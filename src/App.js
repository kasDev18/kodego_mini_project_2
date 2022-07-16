import React from 'react';
import Home from './Pages/Home/Home';
import NavMenu from './components/Nav/Nav';
import Boracay from './Hotel/Boracay/Boracay';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <NavMenu />
      <div className="containe-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boracay" element={<Boracay />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
