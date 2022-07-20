import React from 'react';
import styles from './Boracay.module.css';
import { Link } from 'react-router-dom';
const iframe =
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15612.706970581512!2d121.925545!3d11.962262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x23ee7386a9db7a67!2sThe%20Tides%20Hotel%20Boracay!5e0!3m2!1sen!2sph!4v1658322180553!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
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
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1630914997/blog/zzydhmcu7khdqixvlmxg.webp"
              autoPlay
              className={styles.ImageBoracay}
              alt="Boracay"
            />
          </div>
        </div>
        {/* 
          Description Hotel
        */}
        <div className={styles.BoracayDescription + ' container'}>
          <p>
            Get your trip off to a great start with a stay at this property,
            which offers free Wi-Fi in all rooms. Strategically situated in
            Station 2, allowing you access and proximity to local attractions
            and sights. Be sure to set some time aside to visit Ariel's Point as
            well as White Beach nearby. Rated with 3.5 stars, this high-quality
            property provides guests with access to massage, restaurant and
            fitness center on-site.
          </p>
        </div>

        {/* 
          Rooms
        */}
        <div className="container">
          <div className="row">
            <div className={styles.HotelPackage + ' col-6'}>
              <Link to="/services-rooms-solo/boracay">
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
              <Link to="/services-rooms-double/boracay">
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
              <Link to="/services-rooms-deluxe/boracay">
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
              <Link to="/services-rooms-premier/boracay">
                <div align="center" class="fond">
                  <div className={styles.carreaux_presentation_light}>
                    <div className={styles.shadow_swhow_mini}>
                      <div className={styles.deroul_titre}>Premier </div>
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
              <h1>The Tides Hotel Boracay</h1>
              <h4>D'Mall Station 2, Boracay Island, Boracay, 5608 Aklan</h4>
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
