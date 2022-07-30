import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavMenu from './components/Nav/Nav';
import Landing from './components/Landing/Landing';

import Boracay from './Hotel/Boracay/Boracay';
import ElNido from './Hotel/El_Nido/El_Nido';
import Tagaytay from './Hotel/Tagaytay/Tagaytay';
import About from './About/About';
import Amenities from './Amenities/Amenities';
import Gallery from './Gallery/Gallery';

import Corporate from './Gatherings/Corporate/Corporate';
import Milestone from './Gatherings/Milestone/Milestone';
import Wedding from './Gatherings/Wedding/Wedding';

import RoomsSolo from './Rooms_General/Rooms_Solo/Rooms_Solo';
import RoomsDouble from './Rooms_General/Rooms_Double/Rooms_Double';
import RoomsDelux from './Rooms_General/Rooms_Deluxe/Rooms_Deluxe';
import RoomsPremier from './Rooms_General/Rooms_Premier/Rooms_Premier';

import BoracayGatheringCorporate from './Hotel/Boracay/Boracay_Gatherings/Boracay_Gatherings_Corporate/Boracay_Gatherings_Corporate';
import BoracayGatheringMilestone from './Hotel/Boracay/Boracay_Gatherings/Boracay_Gatherings_Milestone/Boracay_Gatherings_Milestone';
import BoracayGatheringWedding from './Hotel/Boracay/Boracay_Gatherings/Boracay_Gatherings_Wedding/Boracay_Gatherings_Wedding';

import TagaytayGatheringWedding from './Hotel/Tagaytay/Tagaytay_Gatherings/Tagaytay_Gatherings_Wedding/Tagaytay_Gatherings_Wedding';
import TagaytayGatheringMilestone from './Hotel/Tagaytay/Tagaytay_Gatherings/Tagaytay_Gatherings_Milestone/Tagaytay_Gatherings_Milestone';
import TagaytayGatheringCorporate from './Hotel/Tagaytay/Tagaytay_Gatherings/Tagaytay_Gatherings_Corporate/Tagaytay_Gatherings_Corporate';

import ElNidoGatheringCorporate from './Hotel/El_Nido/El_Nido_Gatherings/El_Nido_Gatherings_Corporate/El_Nido_Gatherings_Corporate';
import ElNidoGatheringMilestone from './Hotel/El_Nido/El_Nido_Gatherings/El_Nido_Gatherings_Milestone/El_Nido_Gatherings_Milestone';
import ElNidoGatheringWedding from './Hotel/El_Nido/El_Nido_Gatherings/El_Nido_Gatherings_Wedding/El_Nido_Gatherings_Wedding';

import TagaytaySolo from './Hotel/Tagaytay/Tagaytay_Rooms/Tagaytay_Rooms_Solo/Tagaytay_Rooms_Solo';
import TagaytayDouble from './Hotel/Tagaytay/Tagaytay_Rooms/Tagaytay_Rooms_Double/Tagaytay_Rooms_Double';
import TagaytayDelux from './Hotel/Tagaytay/Tagaytay_Rooms/Tagaytay_Rooms_Deluxe/Tagaytay_Rooms_Deluxe';
import TagaytayPremier from './Hotel/Tagaytay/Tagaytay_Rooms/Tagaytay_Rooms_Premier/Tagaytay_Rooms_Premier';

import BoracaySolo from './Hotel/Boracay/Boracay_Rooms/Boracay_Rooms_Solo/Boracay_Rooms_Solo';
import BoracayDouble from './Hotel/Boracay/Boracay_Rooms/Boracay_Rooms_Double/Boracay_Rooms_Double';
import BoracayDelux from './Hotel/Boracay/Boracay_Rooms/Boracay_Rooms_Deluxe/Boracay_Rooms_Deluxe';
import BoracayPremier from './Hotel/Boracay/Boracay_Rooms/Boracay_Rooms_Premier/Boracay_Rooms_Premier';

import ElNidoSolo from './Hotel/El_Nido/El_Nido_Rooms/El_Nido_Rooms_Solo/El_Nido_Rooms_Solo';
import ElNidoDouble from './Hotel/El_Nido/El_Nido_Rooms/El_Nido_Rooms_Double/El_Nido_Rooms_Double';
import ElNidoDelux from './Hotel/El_Nido/El_Nido_Rooms/El_Nido_Rooms_Deluxe/El_Nido_Rooms_Deluxe';
import ElNidoPremier from './Hotel/El_Nido/El_Nido_Rooms/El_Nido_Rooms_Premier/El_Nido_Rooms_Premier';
import Footer from './components/Footer/Footer';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';

class App extends React.Component {
  render() {
    return (
      <>
        <NavMenu />
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/sign-up" element={<SignIn />} />
            <Route path="/register" element={<Register />} />

            <Route path="/boracay" element={<Boracay />} />
            <Route path="/el-nido" element={<ElNido />} />
            <Route path="/tagaytay" element={<Tagaytay />} />

            <Route path="/gathering-corporate" element={<Corporate />} />
            <Route path="/gathering-milestone" element={<Milestone />} />
            <Route path="/gathering-wedding" element={<Wedding />} />

            <Route path="/about" element={<About />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/gallery" element={<Gallery />} />

            <Route
              path="/services-rooms-solo/boracay"
              element={<BoracaySolo />}
            />
            <Route
              path="/services-rooms-solo/tagaytay"
              element={<TagaytaySolo />}
            />
            <Route
              path="/services-rooms-solo/elnido"
              element={<ElNidoSolo />}
            />

            <Route
              path="/services-rooms-double/boracay"
              element={<BoracayDouble />}
            />
            <Route
              path="/services-rooms-double/tagaytay"
              element={<TagaytayDouble />}
            />
            <Route
              path="/services-rooms-double/elnido"
              element={<ElNidoDouble />}
            />

            <Route
              path="/services-rooms-deluxe/tagaytay"
              element={<TagaytayDelux />}
            />
            <Route
              path="/services-rooms-deluxe/boracay"
              element={<BoracayDelux />}
            />
            <Route
              path="/services-rooms-deluxe/elnido"
              element={<ElNidoDelux />}
            />

            <Route
              path="/services-rooms-premier/elnido"
              element={<ElNidoPremier />}
            />
            <Route
              path="/services-rooms-premier/boracay"
              element={<BoracayPremier />}
            />
            <Route
              path="/services-rooms-premier/tagaytay"
              element={<TagaytayPremier />}
            />

            <Route path="/services-rooms-solo" element={<RoomsSolo />} />
            <Route path="/services-rooms-double" element={<RoomsDouble />} />
            <Route path="/services-rooms-deluxe" element={<RoomsDelux />} />
            <Route path="/services-rooms-premier" element={<RoomsPremier />} />

            <Route
              path="/gathering-corporate/boracay"
              element={<BoracayGatheringCorporate />}
            />
            <Route
              path="/gathering-corporate/tagaytay"
              element={<TagaytayGatheringCorporate />}
            />
            <Route
              path="/gathering-corporate/elnido"
              element={<ElNidoGatheringCorporate />}
            />

            <Route
              path="/gathering-wedding/boracay"
              element={<BoracayGatheringWedding />}
            />

            <Route
              path="/gathering-wedding/tagaytay"
              element={<TagaytayGatheringWedding />}
            />
            <Route
              path="/gathering-wedding/elnido"
              element={<ElNidoGatheringWedding />}
            />

            <Route
              path="/gathering-milestone/tagaytay"
              element={<TagaytayGatheringMilestone />}
            />
            <Route
              path="/gathering-milestone/boracay"
              element={<BoracayGatheringMilestone />}
            />
            <Route
              path="/gathering-milestone/elnido"
              element={<ElNidoGatheringMilestone />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
