import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tagaytay.module.css';

const iframe =
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61909.11239521726!2d120.96893275!3d14.117297200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd777b1ab54c8f%3A0x6ecc514451ce2be8!2sTagaytay%2C%20Cavite!5e0!3m2!1sen!2sph!4v1658058038718!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : '' }}
    />
  );
}
class Boracay extends React.Component {
  render() {
    return (
      <>
        <div className={styles.HotelBoracay}>
          <div className={styles.containerImage}>
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/90/b3/5b/escala-tagaytay.jpg?w=1200&h=-1&s=1"
              alt=""
              className={styles.ImageBoracay}
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
              <Link to="/services-rooms-solo/tagaytay">
                <div align="center" class="fond">
                  <div className={styles.carreaux_presentation_light}>
                    <div className={styles.shadow_swhow_mini}>
                      <div className={styles.deroul_titre}>Solo</div>
                      <div class={styles.deroul_soustitre}>Book Now!</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.HotelPackage + ' col-6'}>
              <Link to="/services-rooms-double/tagaytay">
                <div align="center" class="fond">
                  <div className={styles.carreaux_presentation_light}>
                    <div className={styles.shadow_swhow_mini}>
                      <div className={styles.deroul_titre}>Double</div>
                      <div class={styles.deroul_soustitre}>Book Now!</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className={styles.HotelPackage + ' col-6'}>
              <Link to="/services-rooms-deluxe/tagaytay">
                <div align="center" class="fond">
                  <div className={styles.carreaux_presentation_light}>
                    <div className={styles.shadow_swhow_mini}>
                      <div className={styles.deroul_titre}>Deluxe </div>
                      <div class={styles.deroul_soustitre}>Book Now!</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.HotelPackage + ' col-6'}>
              <Link to="/services-rooms-premier/tagaytay">
                <div align="center" class="fond">
                  <div className={styles.carreaux_presentation_light}>
                    <div className={styles.shadow_swhow_mini}>
                      <div className={styles.deroul_titre}>Premier</div>
                      <div class={styles.deroul_soustitre}>Book Now!</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* 
          Gathering
        */}
        <div className={styles.HotelGatheringContainer + ' container mt-5'}>
          <a href="google.com" className={styles.photo}>
            <div className={styles.HotelGatheringImage}>
              <h1>Corporate</h1>
              <img
                alt="wd2"
                src="https://www.lazorpoint.com/hubfs/Blog/New%20Website%20Hero%20Images%201905%20x%201301%20%289%29.png"
              />
              <div className={styles.glowwrap}>
                <i className={styles.glow}></i>
              </div>
            </div>
          </a>
          <a href="google.com" className={styles.photo}>
            <div className={styles.HotelGatheringImage}>
              <h1>Weddings</h1>
              <img
                alt="wd1"
                src="https://www.beaches.com/blog/content/images/2019/11/Beaches-Turks-Caicos-Beach-Wedding2.jpg"
              />
              <div className={styles.glowwrap}>
                <i className={styles.glow}></i>
              </div>
            </div>
          </a>
          <a href="google.com" className={styles.photo}>
            <div className={styles.HotelGatheringImage}>
              <h1>Milestones</h1>
              <img
                alt="wd"
                src="https://cdn0.weddingwire.com/vendor/537359/original/960/jpg/reception-rosales_51_953735-165212965895663.webp"
              />
              <div className={styles.glowwrap}>
                <i className={styles.glow}></i>
              </div>
            </div>
          </a>
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
        </div>

        <div className="container m-5">
          <div className="row">
            <div className={styles.boraAddress + ' col-6'}>
              <h1>ADDRESS</h1>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4>
            </div>
            <div className={styles.boraMap + ' col-6'}>
              <Iframe iframe={iframe} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Boracay;
