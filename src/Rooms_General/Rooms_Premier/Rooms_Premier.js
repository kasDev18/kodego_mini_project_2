import React from 'react';
import styles from './Rooms_Premier.module.css';
import { Link } from 'react-router-dom';
import Inclusion from '../../components/Inclusion/Inclusion';

class RoomPremier extends React.Component {
  // Redirection Navbar
  RedirectTagaytayPremierRoom = () => {
    setTimeout(() => {
      window.location = '/services-rooms-premier/tagaytay';
    }, 500);
  };
  RedirectBoracayPremierRoom = () => {
    setTimeout(() => {
      window.location = '/services-rooms-premier/boracay';
    }, 500);
  };
  RedirectElNidoPremierRoom = () => {
    setTimeout(() => {
      window.location = '/services-rooms-premier/elnido';
    }, 500);
  };

  render() {
    return (
      <>
        <div className={styles.HotelBoracay}>
          <div className={styles.containerImage}>
            <img
              src="https://res.cloudinary.com/sonder/image/private/s--kIPc5Gjx--/c_fill,f_auto,q_auto:eco,w_2000/v1/s3assets/unit_images/images/000/217/845/original/eTdSEWQ5.jpg"
              autoPlay
              className={styles.ImageBoracay}
              alt="milestone"
            />
          </div>
        </div>
        {/* 
          Description Hotel
        */}
        <div className={styles.locations_cont}>
          <div className={styles.rooms_opening_title + ' d-flex justify-content-center'}>
            <h2>7Seven Luxury Hotel | Rooms</h2>
          </div>
          <div className={styles.BoracayDescription + ' d-flex align-items-center'}>
            <p className='p-5'>
              <b>
                When you need a large venue for your business seminar or company
                banquet, the 7Seven Luxury Hotel is sure to impress. Invite up to
                144 guests, and we take care of the rest. The 7Seven Luxury Hotel
                can be divided into two distinctive suites – one for business
                presentations and the other for dining and discussions, or one for a
                brainstorm over breakfast followed by a productive training session
                in the other. A separate anteroom can also be used as a breakout
                room during meetings, a VIP room for events or an interview room.
                Whatever your agenda, the 7Seven Luxury Hotel at somewhere adapts to
                meet your requirements.
              </b>
            </p>
          </div>
          {/* 
          Rooms
        */}
          <h1 className={styles.locations + ' text-center'}>Locations</h1>
          <div className="d-flex justify-content-center mb-5">
            <div className="row my-5 container">
              <div className={styles.HotelPackage + ' col-4'} onClick={this.RedirectTagaytayPremierRoom}>
                <div>
                  <div align="center" class="fond">
                    <div
                      className={styles.carreaux_presentation_light}
                      style={{
                        backgroundImage: `url("https://res.cloudinary.com/sonder/image/private/s--N26QU9G5--/c_fill,f_auto,q_auto:eco,w_2000/v1/s3assets/unit_images/images/000/176/383/original/fnRFaWKw.jpg")`,
                      }}
                    >
                      <div className={styles.shadow_swhow_mini}>
                        <div className={styles.deroul_titre}>Tagaytay</div>
                        <div class={styles.deroul_soustitre}>Book Now!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.HotelPackage + ' col-4'} onClick={this.RedirectBoracayPremierRoom}>
                <div>
                  <div align="center" class="fond">
                    <div
                      className={styles.carreaux_presentation_light}
                      style={{
                        backgroundImage: `url("https://res.cloudinary.com/sonder/image/private/s--CbrIizwT--/c_fill,f_auto,q_auto:eco,w_2000/v1/s3assets/unit_images/images/000/217/850/original/A8RRHf8Z.jpg")`,
                      }}
                    >
                      <div className={styles.shadow_swhow_mini}>
                        <div className={styles.deroul_titre}>Boracay</div>
                        <div class={styles.deroul_soustitre}>Book Now!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.HotelPackage + ' col-4'} onClick={this.RedirectElNidoPremierRoom}>
                <div>
                  <div align="center" class="fond">
                    <div
                      className={styles.carreaux_presentation_light}
                      style={{
                        backgroundImage: `url("https://res.cloudinary.com/sonder/image/private/s--EJrIPRHm--/c_fill,f_auto,q_auto:eco,w_2000/v1/s3assets/unit_images/images/000/344/370/original/i45CSF3w.jpeg")`,
                      }}
                    >
                      <div className={styles.shadow_swhow_mini}>
                        <div className={styles.deroul_titre}>El-Nido</div>
                        <div class={styles.deroul_soustitre}>Book Now!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.inclusion + ' bg-dark'}>
          <div className="d-flex justify-content-center pt-5">
            <h2 className="text-light border border-2 border-light p-3 col-2 d-flex justify-content-center rounded-pill">Inclusions</h2>
          </div>
          <Inclusion />

        </div>
      </>
    );
  }
}

export default RoomPremier;
