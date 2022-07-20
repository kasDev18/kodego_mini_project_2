import React from 'react';
import styles from './Amenities.module.css';

class Boracay extends React.Component {
  render() {
    return (
      <>
        <div className={styles.HotelBoracay}>
          <div className={styles.containerImage}>
            <img
              src="https://api.crimsonhotel.com/storage/media/image/facility/c51ce410c124a10e0db5e4b97fc2af39/web-banner/eddb904a6db773755d2857aacadb1cb0/Untitled-2.jpg?v=1578638356"
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
            Before diving into our list of unique amenities, we want to make
            sure every hotel has the basics covered. These amenities used to be
            a main selling point for hotels, but now they’re par for the course.
            Simply put, when guests stay at a hotel, they expect these items to
            be readily available and free of charge:
          </p>
        </div>

        {/* 
          Rooms
        */}
        <div className="container mb-4">
          <div className="row">
            <div className={styles.HotelPackage + ' col-6'}>
              <div align="center" class="fond">
                <div
                  className={styles.carreaux_presentation_light}
                  style={{
                    backgroundImage: `url("https://ucarecdn.com/dbfbdb78-2419-4a51-9d20-f3ee4651fc64/-/resize/800x/")`,
                  }}
                >
                  <div className={styles.shadow_swhow_mini}>
                    <div className={styles.deroul_titre}>Toiletries </div>
                    <div class={styles.deroul_soustitre}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.HotelPackage + ' col-6'}>
              <div align="center" class="fond">
                <div
                  className={styles.carreaux_presentation_light}
                  style={{
                    backgroundImage: `url("https://api.crimsonhotel.com/storage/media/image/slide/6364d3f0f495b6ab9dcf8d3b5c6e0b01/video-poster-slide/fed33392d3a48aa149a87a38b875ba4a/manila_dining_banner.jpg?v=1578365851/")`,
                  }}
                >
                  <div className={styles.shadow_swhow_mini}>
                    <div className={styles.deroul_titre}>Free breakfast </div>
                    <div class={styles.deroul_soustitre}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={styles.HotelPackage + ' col-6'}>
              <div align="center" class="fond">
                <div
                  className={styles.carreaux_presentation_light}
                  style={{
                    backgroundImage: `url("https://ucarecdn.com/2cbe6cf2-8104-4fa5-ae34-8266259293a7/-/resize/702x/")`,
                  }}
                >
                  <div className={styles.shadow_swhow_mini}>
                    <div className={styles.deroul_titre}>
                      Bathrobes and slippers
                    </div>
                    <div
                      className={styles.deroul_soustitre + ' z-index-1'}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.HotelPackage + ' col-6 '}>
              <div align="center" class="fond">
                <div
                  className={styles.carreaux_presentation_light}
                  style={{
                    backgroundImage: `url("https://i0.wp.com/amberlair.com/wp-content/uploads/2016/02/amberlair-crowdsourced-crowdfunded-boutique-hotel-Blue-Karma-resort-wifi.jpg?ssl=1/")`,
                  }}
                >
                  <div className={styles.shadow_swhow_mini}>
                    <div className={styles.deroul_titre}>
                      Free WiFi internet access
                    </div>
                    <div
                      className={styles.deroul_soustitre + ' z-index-1'}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={styles.HotelPackage + ' col-6'}>
              <div align="center" class="fond">
                <div
                  className={styles.carreaux_presentation_light}
                  style={{
                    backgroundImage: `url("https://lh4.googleusercontent.com/wJh4s3sEO5HBwxmRMr1rZImrV3jQHFbC2OYceV0pcRWGwzO2tfR7jzRisn-Tpqx3w0gJWcfdpW_RgE00oSBdVaS8J23LxfqOJ49ZP2u9Ni7qJcHH8x26_YaYqSs8TNBz3h1eUYEE")`,
                  }}
                >
                  <div className={styles.shadow_swhow_mini}>
                    <div className={styles.deroul_titre}>
                      In-Room Cocktail Station
                    </div>
                    <div
                      className={styles.deroul_soustitre + ' z-index-1'}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.HotelPackage + ' col-6 '}>
              <div align="center" class="fond">
                <div
                  className={styles.carreaux_presentation_light}
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/zG-sl8ie5CN2c7t-lNuYlKYE4t-QbIJQZ9aCKio2R-TZLXD2oo9z5R6ASouIHKx3t15gebB50X9kwof0vG21uRSTfMTVEGLboU8nW5_qHam4-LTe15a5Fq9ZeBmVLnoC-bm1HEzo")`,
                  }}
                >
                  <div className={styles.shadow_swhow_mini}>
                    <div className={styles.deroul_titre}>
                      Local History at Turndown{' '}
                    </div>
                    <div
                      className={styles.deroul_soustitre + ' z-index-1'}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Boracay;
