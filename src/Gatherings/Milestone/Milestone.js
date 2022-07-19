import React from 'react';
import styles from './Milestone.module.css';
import { Link } from 'react-router-dom';
import BookingForm from '../../components/BookingForm/BookingForm';

class Boracay extends React.Component {
  render() {
    return (
      <>
        <div className={styles.HotelBoracay}>
          <div className={styles.containerImage}>
            <img
              src="https://content.redcarnationhotels.com/cache/5/6/9/d/2/f/569d2f5cd631a8c0d1f5932d1015a8fab32b4b17.webp"
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
            The Milestone is steeped in history and we strive to protect and
            celebrate this precious legacy, from the original marble
            checkerboard floors to the Victorian tiling, leaded windows and
            wooden panelling, allowing guests a rare glimpse into 19th-century
            London. Each of our private dining venues has a story to tell and
            every space is filled with beautiful rich furnishings and exquisite
            original artwork, with the outstanding cuisine and generous
            hospitality that The Milestone is renowned for.
          </p>
        </div>

        {/* 
          Rooms
        */}
        <div className="container">
          <div className="row">
            <div className={styles.HotelPackage + ' col-6'}>
              <Link to="/gathering-milestone/tagaytay">
                <div align="center" class="fond">
                  <div
                    className={styles.carreaux_presentation_light}
                    style={{
                      backgroundImage: `url("https://img.tagvenue.com/resize/cc/4e/widen-1680-noupsize;335-whole-venue-room.jpg")`,
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
              <p>
                Ideally suited for exquisite private dining events and elegant
                cocktail receptions, with a spectacular chandelier and open
                fireplace.
              </p>
            </div>
          </div>
          <div className="row">
            <div className={styles.boraAddress + ' col-6'}>
              <h1>Boracay</h1>
              <p>
                Once the original chapel of the house, The Oratory is the
                perfect setting for intimate dining, private meetings and cosy
                celebrations.
              </p>
            </div>
            <div className={styles.HotelPackage + ' col-6'}>
              <Link to="/gathering-milestone/boracay">
                <div align="center" class="fond">
                  <div
                    className={styles.carreaux_presentation_light}
                    style={{
                      backgroundImage: `url("https://img.tagvenue.com/resize/91/7d/widen-1680-noupsize;1219-main-space-room.jpg")`,
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
              <Link to="/gathering-milestone/elnido">
                <div align="center" class="fond">
                  <div
                    className={styles.carreaux_presentation_light}
                    style={{
                      backgroundImage: `url("https://img.tagvenue.com/resize/55/b6/widen-1680-noupsize;30528-the-london-gin-club-room.jpg")`,
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
              <p>
                The Map Room is enhanced by natural daylight and rich
                furnishings, creating a sense of occasion that is greater than
                its size.
              </p>
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

export default Boracay;
