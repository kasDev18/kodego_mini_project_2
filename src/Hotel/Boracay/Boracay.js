import React from 'react';
import styles from './Boracay.module.css';

class Boracay extends React.Component {
  render() {
    return (
      <>
        <div className={styles.HotelBoracay}>
          <div className={styles.containerImage}>
            <img
              src="boracay/boracay.webp"
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
              <div align="center" class="fond">
                <div className={styles.carreaux_presentation_light}>
                  <div className={styles.shadow_swhow_mini}>
                    <div className={styles.deroul_titre}>Solo</div>
                    <div class={styles.deroul_soustitre}>Book Now!</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.HotelPackage + ' col-6'}>
              <div align="center" class="fond">
                <div className={styles.carreaux_presentation_light}>
                  <div className={styles.shadow_swhow_mini}>
                    <div className={styles.deroul_titre}>Double</div>
                    <div class={styles.deroul_soustitre}>Book Now!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={styles.HotelPackage + ' col-6'}>
              <div align="center" class="fond">
                <div className={styles.carreaux_presentation_light}>
                  <div className={styles.shadow_swhow_mini}>
                    <div className={styles.deroul_titre}>Delux </div>
                    <div class={styles.deroul_soustitre}>Book Now!</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.HotelPackage + ' col-6'}>
              <div align="center" class="fond">
                <div className={styles.carreaux_presentation_light}>
                  <div className={styles.shadow_swhow_mini}>
                    <div className={styles.deroul_titre}>Delux Double</div>
                    <div class={styles.deroul_soustitre}>Book Now!</div>
                  </div>
                </div>
              </div>
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

        <div className="container m-5">
          <div className="row">
            <div className={styles.boraAddress + ' col-6'}>
              <h1>ADDRESS</h1>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4>
            </div>
            <div className={styles.boraMap + ' col-6'}>
              <img src="boracay/mapBora.avif" alt="bora" />
            </div>
          </div>
        </div>

        <div className="container   justify-content-center">
          <h1>LOCATIONS</h1>
          <p>Crimson</p>
        </div>
      </>
    );
  }
}

export default Boracay;
