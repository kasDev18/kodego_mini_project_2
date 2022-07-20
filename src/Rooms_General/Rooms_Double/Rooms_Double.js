import React from 'react';
import styles from './Rooms_Double.module.css';
import { Link } from 'react-router-dom';
import BookingForm from '../../components/BookingForm/BookingForm';

class RoomDouble extends React.Component {
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
        <div className={styles.BoracayDescription}>
          <p>
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
          </p>
        </div>

        {/* 
          Rooms
        */}
        <div className="container my-5 ">
          <h1 className="text-center">Locations</h1>
          <div className="row my-5">
            <div className={styles.HotelPackage + ' col-4'}>
              <Link to="/services-rooms-double/tagaytay">
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
              </Link>
            </div>
            <div className={styles.HotelPackage + ' col-4'}>
              <Link to="/services-rooms-double/boracay">
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
              </Link>
            </div>
            <div className={styles.HotelPackage + ' col-4'}>
              <Link to="/services-rooms-double/elnido">
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

export default RoomDouble;
