import React from 'react';
import styles from './Tagaytay_Rooms_Double.module.css';
import { Link } from 'react-router-dom';

class TagaytayRoomsDouble extends React.Component {
  render() {
    return (
      <>
        <div className={styles.HotelBoracay}>
          <div className={styles.containerImage}>
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/a2/f0/da/deluxe-queen-room.jpg?w=1100&h=-1&s=1"
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
          <div className="row my-5">
            <div className={styles.HotelPackage + ' col-6'}>
              <Link to=" ">
                <div align="center" class="fond">
                  <div
                    className={styles.carreaux_presentation_light}
                    style={{
                      backgroundImage: `url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/a2/f0/0d/premier-queen-and-single.jpg?w=1100&h=-1&s=1")`,
                    }}
                  >
                    <div className={styles.shadow_swhow_mini}>
                      <div className={styles.deroul_titre}>TAGAYTAY</div>
                      <div class={styles.deroul_soustitre}>Book Now!</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.HotelPackage + ' col-6'}>
              <div className={styles.boraAddress}>
                <h1 className="mb-5">DOUBLE ROOM</h1>
                <p>
                  <strong>Floor area:</strong> 27 sqm
                </p>
                <p>
                  <strong>Bed Configuration:</strong> Available in twin or queen
                  bed configurations
                </p>
                <p>
                  The room features a queen-sized bed. It has a spacious balcony
                  and the most charming view of the Newcoast Beach and the
                  Boracay Keyhole.
                </p>
              </div>
            </div>
            <div className="text-center mt-5">
              <span className="btn btn-primary ">Book Now</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TagaytayRoomsDouble;
