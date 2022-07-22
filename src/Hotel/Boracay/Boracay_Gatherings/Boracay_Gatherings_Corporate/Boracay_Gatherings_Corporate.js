import React from 'react';
import styles from './Boracay_Gatherings_Corporate.module.css';
import { Link } from 'react-router-dom';
import BookingForm from '../../../../components/BookingForm/BookingForm';
import ModalComponent from '../../../../components/ModalComponent/ModalComponentMilestone';

class BoracayGatheringsCorporate extends React.Component {
  render() {
    return (
      <>
        <div className={styles.HotelBoracay}>
          <div className={styles.containerImage}>
            <img
              src="https://img.tagvenue.com/resize/b8/d7/widen-1680-noupsize;393-one-moorgate-place-venue.jpg"
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
            This charming room is always a talking point at events. It features
            a balustrade bridge designed in the style of the Rialto Bridge in
            Venice, together with a portrait gallery and display cabinets full
            of rare books and other curiosities. The room can be laid out in
            multiple styles and will add a touch of class to your board room
            meetings.
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
                      backgroundImage: `url("https://img.tagvenue.com/resize/ef/d1/widen-1680-noupsize;5076-whole-venue-room.jpg")`,
                    }}
                  >
                    <div className={styles.shadow_swhow_mini}>
                      <div className={styles.deroul_titre}>
                        <ModalComponent />
                      </div>
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
                      backgroundImage: `url("https://img.tagvenue.com/resize/ec/24/widen-1680-noupsize;655-exclusive-hire-of-helix-iris-room.jpg")`,
                    }}
                  >
                    <div className={styles.shadow_swhow_mini}>
                      <div className={styles.deroul_titre}>
                        <ModalComponent />
                      </div>
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
                      backgroundImage: `url("https://img.tagvenue.com/resize/73/80/widen-1680-noupsize;13673-the-waiting-room-room.jpg")`,
                    }}
                  >
                    <div className={styles.shadow_swhow_mini}>
                      <div className={styles.deroul_titre}>
                        <ModalComponent />
                      </div>
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

export default BoracayGatheringsCorporate;
