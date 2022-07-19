import React from 'react';
import styles from './El_Nido_Gatherings_Wedding.module.css';
import { Link } from 'react-router-dom';
import BookingForm from '../../../../components/BookingForm/BookingForm';

class Boracay extends React.Component {
  render() {
    return (
      <>
        <div className={styles.HotelBoracay}>
          <div className={styles.containerImage}>
            <img
              src="https://img.tagvenue.com/resize/8c/e8/widen-1680-noupsize;2019-whole-venue-room.jpg"
              autoPlay
              className={styles.ImageBoracay}
              alt="milestone"
            />
          </div>
        </div>
        {/* 
          Description Hotel
        */}
        <div className={styles.BoracayDescription}>
          <p>
            We pour our creativity into every room, always with our guests’
            comfort in mind. Each room has a distinct character, filled with
            curated artworks and sumptuous prints. Our Grand Master Suites are
            iconic, from the Noel Coward Suite, with its art deco touches and
            priceless antiques, to the Hermès Suite, featuring lofty ceilings,
            extraordinary custom-made furniture, and a romantic balcony.
          </p>
        </div>

        {/* 
          Rooms
        */}
        <div className="container my-5 ">
          <h1 className="text-center">Choose your Package</h1>
          <div className="row my-5">
            <div className={styles.HotelPackage + ' col-4'}>
              <Link to=" ">
                <div align="center" class="fond">
                  <div
                    className={styles.carreaux_presentation_light}
                    style={{
                      backgroundImage: `url("https://img.tagvenue.com/resize/67/e8/widen-1680-noupsize;4194-westminster-suite-room.jpg")`,
                    }}
                  >
                    <div className={styles.shadow_swhow_mini}>
                      <div className={styles.deroul_titre}>Package 1</div>
                      <div class={styles.deroul_soustitre}>Book Now!</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.HotelPackage + ' col-4'}>
              <Link to=" ">
                <div align="center" class="fond">
                  <div
                    className={styles.carreaux_presentation_light}
                    style={{
                      backgroundImage: `url("https://img.tagvenue.com/resize/08/1b/widen-1680-noupsize;4194-westminster-suite-room.jpg")`,
                    }}
                  >
                    <div className={styles.shadow_swhow_mini}>
                      <div className={styles.deroul_titre}>Package 2</div>
                      <div class={styles.deroul_soustitre}>Book Now!</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.HotelPackage + ' col-4'}>
              <Link to=" ">
                <div align="center" class="fond">
                  <div
                    className={styles.carreaux_presentation_light}
                    style={{
                      backgroundImage: `url("https://img.tagvenue.com/resize/90/bb/widen-1680-noupsize;4194-westminster-suite-room.jpg")`,
                    }}
                  >
                    <div className={styles.shadow_swhow_mini}>
                      <div className={styles.deroul_titre}>Package 3</div>
                      <div class={styles.deroul_soustitre}>Book Now!</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="container mt-5 bg-body">
          <h1 className="text-center mb-4">Book Now!</h1>

          <BookingForm />
        </div>
      </>
    );
  }
}

export default Boracay;
