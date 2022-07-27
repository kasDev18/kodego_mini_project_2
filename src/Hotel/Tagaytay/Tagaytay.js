import React from 'react';
import styles from './Tagaytay.module.css';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import Testimonial from '../../components/Testimonial/Testimonial';
import Loader from '../../components/Loader/Loader';

const iframe =
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15479.458475973914!2d120.8861609!3d14.085168!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x91c5bb9003d5e4f8!2sThe%20Oriental%20Luxury%20Suites!5e0!3m2!1sen!2sph!4v1658321397261!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : '' }}
    />
  );
}

class Boracay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boracay: false,
    };
    this.getData();
  }

  getData = () => {
    setTimeout(() => {
      fetch('')
        .then(result => result)
        .then((response) => {
          this.setState({ boracay: true });
        })
    }, 3000);
  }

  //Redirect Per Room(Tagaytay)
  RedirectTagaytayRoomSolo = () => {
    setTimeout(() => {
      window.location = '/services-rooms-solo/tagaytay';
    }, 500);
  };
  RedirectTagaytayRoomDouble = () => {
    setTimeout(() => {
      window.location = '/services-rooms-double/tagaytay';
    }, 500);
  };
  RedirectTagaytayRoomDeluxe = () => {
    setTimeout(() => {
      window.location = '/services-rooms-deluxe/tagaytay';
    }, 500);
  };
  RedirectTagaytayRoomPremier = () => {
    setTimeout(() => {
      window.location = '/services-rooms-premier/tagaytay';
    }, 500);
  };

  //Redirect Per Event(Tagaytay)
  RedirectTagaytayGatherWedding = () => {
    setTimeout(() => {
      window.location = '/gathering-wedding/tagaytay';
    }, 500);
  };
  RedirectTagaytayGatherCorporate = () => {
    setTimeout(() => {
      window.location = '/gathering-corporate/tagaytay';
    }, 500);
  };
  RedirectTagaytayGatherMilestone = () => {
    setTimeout(() => {
      window.location = '/gathering-milestone/tagaytay';
    }, 500);
  };

  render() {
    return (
      <>
        {this.state.boracay ?
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
            <div className={styles.body_cont}>
              {/* 
          Description Hotel
        */}
              <div className={styles.BoracayDescription + ' '}>
                <div className={styles.boracay_desc_cont}>
                  <div className="d-flex justify-content-center">
                    <h4>7Seven Tagaytay Branch</h4>
                  </div>
                  <div className={styles + '  d-flex mb-5'}>
                    <h5 className="container mb-5 text-dark">
                      An upscale hotel overlooking the Batangas landscape along with
                      picturesque views of the Taal Lake and Volcano, the Oriental
                      Luxury Suites offers 7 room types named after a colorful city
                      in Thailand. Each opulently styled Thai-inspired suite comes
                      with a complimentary set breakfast, a set of bathroom
                      amenities, a hot and cold shower, cable television, free
                      parking, welcome drinks, free bottled water, and wifi access.
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
                      onClick={this.RedirectTagaytayRoomSolo}
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
                      onClick={this.RedirectTagaytayRoomDouble}
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
                      onClick={this.RedirectTagaytayRoomDeluxe}
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
                      onClick={this.RedirectTagaytayRoomPremier}
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
                <div role="button" onClick={this.RedirectTagaytayGatherCorporate}>
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
                <div role="button" onClick={this.RedirectTagaytayGatherWedding}>
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
                <div role="button" onClick={this.RedirectTagaytayGatherMilestone}>
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
                      <h1>7Seven Luxury | Tagaytay</h1>
                    </div>
                    <h4>Tagaytay - Nasugbu Hwy, Alfonso, Cavite</h4>
                  </div>
                </div>
                <div className={styles.boraMap + ' col-6'}>
                  <Iframe iframe={iframe} />
                </div>
              </div>
            </div>
          </> : <Loader />}
      </>
    );
  }
}

export default Boracay;
