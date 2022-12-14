import React from 'react';
import styles from './Boracay.module.css';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import Testimonial from '../../components/Testimonial/Testimonial';

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
  //Redirect Per Room(Tagaytay)
  RedirectBoracayRoomSolo = () => {
    setTimeout(() => {
      window.location = '/services-rooms-solo/boracay';
    }, 500);
  };
  RedirectBoracayRoomDouble = () => {
    setTimeout(() => {
      window.location = '/services-rooms-double/boracay';
    }, 500);
  };
  RedirectBoracayRoomDeluxe = () => {
    setTimeout(() => {
      window.location = '/services-rooms-deluxe/boracay';
    }, 500);
  };
  RedirectBoracayRoomPremier = () => {
    setTimeout(() => {
      window.location = '/services-rooms-premier/boracay';
    }, 500);
  };

  //Redirect Per Event(Tagaytay)
  RedirectBoracayGatherWedding = () => {
    setTimeout(() => {
      window.location = '/gathering-wedding/boracay';
    }, 500);
  };
  RedirectBoracayGatherCorporate = () => {
    setTimeout(() => {
      window.location = '/gathering-corporate/boracay';
    }, 500);
  };
  RedirectBoracayGatherMilestone = () => {
    setTimeout(() => {
      window.location = '/gathering-milestone/boracay';
    }, 500);
  };

  render() {
    return (
      <>
        <div className={styles.HotelBoracay}>
          <div className={styles.containerImage}>
            <img
              src="https://www.discoveryshoresboracay.com/files/2017/05/View-from-the-upper-clusters.jpg"
              autoPlay
              className={styles.ImageBoracay}
              alt="Boracay"
            />
          </div>
        </div>
        <div className={styles.body_cont}>
          {/* 
          Description Hotel
        */}
          <div className={styles.BoracayDescription + ' container'}>
            <div className={styles.boracay_desc_cont}>
              <div className="d-flex justify-content-center">
                <h4>7Seven Boracay Branch</h4>
              </div>
              <div className={styles + '  d-flex mb-5'}>
                <h5 className="container mb-5 text-dark">
                  Get your trip off to a great start with a stay at this
                  property, which offers free Wi-Fi in all rooms. Strategically
                  situated in Station 2, allowing you access and proximity to
                  local attractions and sights. Be sure to set some time aside
                  to visit Ariel's Point as well as White Beach nearby. Rated
                  with 3.5 stars, this high-quality property provides guests
                  with access to massage, restaurant and fitness center on-site.
                </h5>
              </div>
              <hr className="mx-5 mt-5"></hr>
            </div>
          </div>

          {/* 
          Rooms
        */}
          <div className={styles.img_cont_cont + ' mt-5'}>
            <div className={styles + '  d-flex justify-content-center'}>
              <h4>Rooms Option</h4>
            </div>
            <div
              className={
                styles.img_cont + ' d-flex justify-content-center pt-5'
              }
            >
              <div className="row container d-flex justify-content-center">
                <div
                  className={styles.HotelPackage + ' col-6'}
                  onClick={this.RedirectBoracayRoomSolo}
                >
                  <div>
                    <div align="center" class="fond">
                      <div className={styles.carreaux_presentation_light}>
                        <div className={styles.shadow_swhow_mini}>
                          <div className={styles.deroul_titre}>Solo</div>
                          <div class={styles.deroul_soustitre}>Book Now!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.HotelPackage + ' col-6'}
                  onClick={this.RedirectBoracayRoomDouble}
                >
                  <div>
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
              </div>
            </div>
            <div
              className={
                styles.img_cont +
                ' d-flex justify-content-center pt-5 pb-5 mb-5'
              }
            >
              <div className="row container">
                <div
                  className={styles.HotelPackage + ' col-6'}
                  onClick={this.RedirectBoracayRoomDeluxe}
                >
                  <div>
                    <div align="center" class="fond">
                      <div className={styles.carreaux_presentation_light}>
                        <div className={styles.shadow_swhow_mini}>
                          <div className={styles.deroul_titre}>Deluxe </div>
                          <div class={styles.deroul_soustitre}>Book Now!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.HotelPackage + ' col-6'}
                  onClick={this.RedirectBoracayRoomPremier}
                >
                  <div>
                    <div align="center" class="fond">
                      <div className={styles.carreaux_presentation_light}>
                        <div className={styles.shadow_swhow_mini}>
                          <div className={styles.deroul_titre}>Premier</div>
                          <div class={styles.deroul_soustitre}>Book Now!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 
          Gathering
        */}
        <div className={styles.CardWrappers + ' pt-5'}>
          <div className="d-flex justify-content-center pt-4">
            <h2 className="text-light">Event Gather</h2>
          </div>
          <div
            className={
              styles + ' mt-5 d-flex align-items-center justify-content-center'
            }
          >
            <div onClick={this.RedirectBoracayGatherCorporate}>
              <Card className={styles.CardHolders}>
                <CardImg
                  top
                  src="https://www.lazorpoint.com/hubfs/Blog/New%20Website%20Hero%20Images%201905%20x%201301%20%289%29.png"
                  alt="..."
                />
                <CardBody>
                  <CardText className="d-flex align-items-center justify-content-center pt-3">
                    <h1>Corporate</h1>
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div onClick={this.RedirectBoracayGatherWedding}>
              <Card className={styles.CardHolders}>
                <CardImg
                  top
                  src="https://www.beaches.com/blog/content/images/2019/11/Beaches-Turks-Caicos-Beach-Wedding2.jpg"
                  alt="..."
                />
                <CardBody>
                  <CardText className="d-flex align-items-center justify-content-center pt-3">
                    <h1>Wedding</h1>
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div onClick={this.RedirectBoracayGatherMilestone}>
              <Card className={styles.CardHolders}>
                <CardImg
                  top
                  src="https://cdn0.weddingwire.com/vendor/537359/original/960/jpg/reception-rosales_51_953735-165212965895663.webp"
                  alt="..."
                />
                <CardBody>
                  <CardText className="d-flex align-items-center justify-content-center pt-3">
                    <h1>Milestone</h1>
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>

        {/* 
          Testimonials
        */}
        <Testimonial />
        {/* MAPS */}
        <div
          className={
            styles.map_cont +
            '  d-flex align-items-center justify-content-center'
          }
        >
          <div className="row container">
            <div
              className={
                styles.boraAddress + ' col-6 d-flex align-items-center'
              }
            >
              <div className={styles.address + ' p-1'}>
                <div className="d-flex justify-content-center">
                  <h1>7Seven Luxury | Boracay</h1>
                </div>
                <div className="d-flex justify-content-center">
                  <h4>D'Mall Station 2, Boracay Island, Boracay, 5608 Aklan</h4>
                </div>
              </div>
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
