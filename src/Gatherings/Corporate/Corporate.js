import React from 'react';
import styles from './Corporate.module.css';
import { Link } from 'react-router-dom';
import BookingForm from '../../components/BookingForm/BookingForm';

class Corporate extends React.Component {
  render() {
    return (
      <>
        <div className={styles.HotelBoracay}>
          <div className={styles.containerImage}>
            <img
              src="https://theroomshotel.ru/public/frontend/images/business-services/business-services-4.jpg"
              autoPlay
              className={styles.ImageBoracay}
              alt="Boracay"
            />
          </div>
        </div>
        {/* 
          Description Hotel
        */}
        <div className={styles.BoracayDescription}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            aliquam nobis mollitia pariatur amet quo quasi incidunt veritatis
            voluptatibus sapiente ipsum consequuntur id, deserunt vel deleniti!
            Commodi voluptates pariatur corrupti?
          </p>
        </div>

        {/* 
          Rooms
        */}
        <div className="container">
          <div className="row">
            <div className={styles.HotelPackage + ' col-6'}>
              <Link to="/gathering-corporate/tagaytay">
                <div align="center" class="fond">
                  <div
                    className={styles.carreaux_presentation_light}
                    style={{
                      backgroundImage: `url("https://img.tagvenue.com/resize/c8/20/widen-1680-noupsize;1521-the-durham-street-auditorium-room.jpg")`,
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
            <div className={styles.boraAddress + ' col-6'}>
              <h1>Tagaytay</h1>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4>
            </div>
          </div>
          <div className="row">
            <div className={styles.boraAddress + ' col-6'}>
              <h1>Boracay</h1>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4>
            </div>
            <div className={styles.HotelPackage + ' col-6'}>
              <Link to="/gathering-corporate/boracay">
                <div align="center" class="fond">
                  <div
                    className={styles.carreaux_presentation_light}
                    style={{
                      backgroundImage: `url("https://img.tagvenue.com/resize/ce/03/widen-1680-noupsize;1007-members-room-room.jpg")`,
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
          </div>
          <div className="row">
            <div className={styles.HotelPackage + ' col-6'}>
              <Link to="/gathering-corporate/elnido">
                <div align="center" class="fond">
                  <div
                    className={styles.carreaux_presentation_light}
                    style={{
                      backgroundImage: `url("https://img.tagvenue.com/resize/23/31/widen-1680-noupsize;14025-whole-venue-room.jpg")`,
                    }}
                  >
                    <div className={styles.shadow_swhow_mini}>
                      <div className={styles.deroul_titre}>El Nido</div>
                      <div class={styles.deroul_soustitre}>Book Now!</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.boraAddress + ' col-6'}>
              <h1>El Nido</h1>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4>
            </div>
          </div>
        </div>

        {/* 
          Testimonials
        */}

        <div>
          <div className={styles.HotelTestimonials + ' container-fluid d-flex'}>
            <div className={styles.HotelsTestimonialText}>
              <h4>outstanding home away from home</h4>
              <p>
                "Great facilities, food and a welcoming staff make this my go-to
                for work/leisure travel in PNW!"
              </p>
            </div>
            <div className={styles.HotelsTestimonialText}>
              <h4>always a great place to stay</h4>
              <p>
                "Their restaurants (Splash and Polaris) have excellent healthy
                food. Super friendly people. Will always come back to this
                hotel."
              </p>
            </div>
            <div className={styles.HotelsTestimonialText}>
              <h4>amazing place to stay here</h4>
              <p>
                "The staff was so friendly and professional, super helpful too.
                The room was clean and had everything we needed."
              </p>
            </div>
            <div className={styles.HotelsTestimonialText}>
              <h4>excellent hotel with club experience</h4>
              <p>
                "This is a high-class property with a boutique hotel feel. I
                have stayed here many times over the years and it has always
                been a consistently good experience."
              </p>
            </div>
            <hr />
          </div>
          {/* 
          Awards
        */}

          <div className={styles.Awards + ' container-fluid pb-5'}>
            <img src="boracay/award1.png" alt="award1" />
            <img src="boracay/award2.png" alt="award2" />
            <img src="boracay/award3.png" alt="award3" />
            <img src="boracay/award4.png" alt="award4" />
            <img src="boracay/award5.png" alt="award5" />
            <img src="boracay/award6.jpg" alt="award6" />
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

export default Corporate;
