import React from 'react';
import styles from './Corporate.module.css';
import Testimonial from '../../components/Testimonial/Testimonial';

class Corporate extends React.Component {
  // Redirection Navbar
  RedirectTagaytayGatherCorporate = () => {
    setTimeout(() => {
      window.location = '/gathering-corporate/tagaytay';
    }, 500);
  };
  RedirectBoracayGatherCorporate = () => {
    setTimeout(() => {
      window.location = '/gathering-corporate/boracay';
    }, 500);
  };
  RedirectElNidoGatherCorporate = () => {
    setTimeout(() => {
      window.location = '/gathering-corporate/elnido';
    }, 500);
  };

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
          <h2 className={styles.title + ' d-flex justify-content-center m-5'}>
            7Seven Luxury Hotel | Tagaytay Gather Wedding
          </h2>
          <div className={styles + ' container d-flex align-items-center'}>
            <h5>
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
            </h5>
          </div>
        </div>


        {/* 
          Rooms
        */}
        <div className={styles.gather_gen_cont}>
          <div className="container">
            <div className="row">
              <div className={styles.HotelPackage + ' col-6'} onClick={this.RedirectTagaytayGatherCorporate}>
                <div>
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
                </div>
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
              <div className={styles.HotelPackage + ' col-6'} onClick={this.RedirectBoracayGatherCorporate}>
                <div>
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
                </div>
              </div>
            </div>
            <div className="row">
              <div className={styles.HotelPackage + ' col-6'} onClick={this.RedirectElNidoGatherCorporate}>
                <div>
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
                </div>
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
        </div>

        {/* 
          Testimonials
        */}

        <div>
          <Testimonial />
        </div>
      </>
    );
  }
}

export default Corporate;
