import React from 'react';
import styles from './Wedding.module.css';
import { Link } from 'react-router-dom';
import BookingForm from '../../components/BookingForm/BookingForm';

class Wedding extends React.Component {
  render() {
    return (
      <>
        <div className={styles.HotelBoracay}>
          <div className={styles.containerImage}>
            <img
              src="https://milestonehotel.com/media/qpeflslh/the-milestone-wedding_5.jpg?width=1920&height=1080&anchor=center&format=webp&mode=crop&quality=80&rnd=132406786275430000&scale=both"
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
        <div className="container">
          <div className="row">
            <div className={styles.HotelPackage + ' col-6'}>
              <Link to="/gathering-wedding/tagaytay">
                <div align="center" class="fond">
                  <div
                    className={styles.carreaux_presentation_light}
                    style={{
                      backgroundImage: `url("https://img.tagvenue.com/resize/21/c9/fit-535-358;10241-cambridge-cottage-room.jpg")`,
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
                Ideal for larger weddings, standing receptions, or banquets, and
                licensed for elegant civil ceremonies. The beautifully decorated
                room, complete with a feature chandelier and fireplace, is the
                perfect setting to exchange your vows, and is transformed for
                magical wedding receptions with a host of stylish and thoughtful
                touches.
              </p>
            </div>
          </div>
          <div className="row">
            <div className={styles.boraAddress + ' col-6'}>
              <h1>Boracay</h1>
              <p>
                Ideal for larger weddings, standing receptions, or banquets, and
                licensed for elegant civil ceremonies. The beautifully decorated
                room, complete with a feature chandelier and fireplace, is the
                perfect setting to exchange your vows, and is transformed for
                magical wedding receptions with a host of stylish and thoughtful
                touches.
              </p>
            </div>
            <div className={styles.HotelPackage + ' col-6'}>
              <Link to="/gathering-wedding/boracay">
                <div align="center" class="fond">
                  <div
                    className={styles.carreaux_presentation_light}
                    style={{
                      backgroundImage: `url("https://img.tagvenue.com/resize/8c/8a/fit-535-358;4194-westminster-suite-room.jpg")`,
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
              <Link to="/gathering-wedding/elnido">
                <div align="center" class="fond">
                  <div
                    className={styles.carreaux_presentation_light}
                    style={{
                      backgroundImage: `url("https://img.tagvenue.com/resize/41/c8/fit-535-358;2019-whole-venue-room.jpg")`,
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
                Ideal for larger weddings, standing receptions, or banquets, and
                licensed for elegant civil ceremonies. The beautifully decorated
                room, complete with a feature chandelier and fireplace, is the
                perfect setting to exchange your vows, and is transformed for
                magical wedding receptions with a host of stylish and thoughtful
                touches.
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

export default Wedding;
