import React from 'react';
import styles from './Tagaytay_Gatherings_Corporate.module.css';
import { Link } from 'react-router-dom';
import BookingForm from '../../../../components/BookingForm/BookingForm';
import ModalComponent from '../../../../components/ModalComponent/ModalComponentCorporate';
class TagaytayGatheringsCorporate extends React.Component {
  state = {
    openModal: false,
  };
  onClickButton = (e) => {
    e.preventDefault();
    this.setState({ openModal: true });
  };
  onCloseModal = () => {
    this.setState({ openModal: false });
  };
  render() {
    return (
      <>
        <div className={styles.HotelBoracay}>
          <div className={styles.containerImage}>
            <img
              src="https://img.tagvenue.com/resize/e2/e8/widen-1680-noupsize;1521-the-durham-street-auditorium-room.jpg"
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
              <div
                align="center"
                class="fond cursor-pointer"
                onClick={this.showModal}
              >
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

export default TagaytayGatheringsCorporate;
