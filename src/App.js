import React from 'react';
import Landing from './components/Landing/Landing';
import NavMenu from './components/Nav/Nav';
import Boracay from './Hotel/Boracay/Boracay';
import ElNido from './Hotel/El_Nido/El_Nido';
import Tagaytay from './Hotel/Tagaytay/Tagaytay';
import About from './About/About';
import Amenities from './Amenities/Amenities';
import Gallery from './Gallery/Gallery';
import Corporate from './Gatherings/Corporate/Corporate';
import Milestone from './Gatherings/Milestone/Milestone';
import Wedding from './Gatherings/Wedding/Wedding';

import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
      <NavMenu />
      <div className="containe-fluid">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/boracay" element={<Boracay />} />
          <Route path="/el-nido" element={<ElNido />} />
          <Route path="/tagaytay" element={<Tagaytay />} />
          <Route path="/about" element={<About />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/milestone" element={<Milestone />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/gatherings" element={<Tagaytay />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
