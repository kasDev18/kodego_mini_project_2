import React from 'react';
import styles from './Milestone.module.css';
import { Link } from 'react-router-dom';
import Testimonial from '../../components/Testimonial/Testimonial';


class Milestone extends React.Component {
  // Redirection Navbar
  RedirectTagaytayMilestone = () => {
    setTimeout(() => {
      window.location = '/gathering-milestone/tagaytay';
    }, 500);
  };
  RedirectBoracayMilestone = () => {
    setTimeout(() => {
      window.location = '/gathering-milestone/boracay';
    }, 500);
  };
  RedirectElNidoMilestone = () => {
    setTimeout(() => {
      window.location = '/gathering-milestone/elnido';
    }, 500);
  };


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
          <h2 className={styles.title + ' d-flex justify-content-center m-5'}>
            7Seven Luxury Hotel | Tagaytay Gather Milestone
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
              <div className={styles.HotelPackage + ' col-6'} onClick={this.RedirectTagaytayMilestone}>
                <div>
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
                </div>
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
              <div className={styles.HotelPackage + ' col-6'} onClick={this.RedirectBoracayMilestone}>
                <div>
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
                </div>
              </div>
            </div>
            <div className="row">
              <div className={styles.HotelPackage + ' col-6'} onClick={this.RedirectElNidoMilestone}>
                <div>
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
                </div>
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

export default Milestone;
