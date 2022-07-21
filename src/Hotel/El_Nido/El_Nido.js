import React from 'react';
import { Link } from 'react-router-dom';
import styles from './El_Nido.module.css';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';

const iframe =
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15656.68547208685!2d119.2891598!3d11.1749444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf80398c891b4bfef!2sMatinloc%20Resort%20El%20Nido!5e0!3m2!1sen!2sph!4v1658327124748!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
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
              src="https://www.kayak.com/rimg/himg/73/eb/75/hotelsdotcom-645023616-49873c22_w-273737.jpg?width=2160&height=1215&crop=true&outputtype=webp"
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
          <div className={styles.BoracayDescription + ' '}>
            <div className={styles.boracay_desc_cont}>
              <div className='d-flex justify-content-center'>
                <h4>7Seven El Nido Branch</h4>
              </div>
              <div className={styles + '  d-flex mb-5'}>
                <h5 className="container mb-5 text-dark">
                  7Seven Luxury Hotel Resort prides itself as a family-friendly resort situated
                  right in the heart of Matinloc Island. This exclusive enclave offers
                  a luxurious treat for holiday-goers. From its premium guestrooms,
                  private beach to its beachside restaurant and top-notch recreational
                  facilities, one cannot help but feel like a VIP.
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
            <div className={styles.img_cont + ' d-flex justify-content-center pt-5'}>
              <div className="row container d-flex justify-content-center">
                <div className={styles.HotelPackage + ' col-6'} onClick={this.RedirectTagaytayRoomSolo}>
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
                <div className={styles.HotelPackage + ' col-6'} onClick={this.RedirectTagaytayRoomDouble}>
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
            <div className={styles.img_cont + ' d-flex justify-content-center pt-5 pb-5 mb-5'}>
              <div className="row container">
                <div className={styles.HotelPackage + ' col-6'} onClick={this.RedirectTagaytayRoomDeluxe}>
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
                <div className={styles.HotelPackage + ' col-6'} onClick={this.RedirectTagaytayRoomPremier}>
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
          <div className={styles + ' mt-5 d-flex align-items-center justify-content-center'}>
            <div onClick={this.RedirectTagaytayGatherCorporate}>
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
            <div onClick={this.RedirectTagaytayGatherWedding}>
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
            <div onClick={this.RedirectTagaytayGatherMilestone}>
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

        <div>
          <div className={styles.HotelTestimonials + ' container-fluid d-flex justify-content-center align-items-center'}>
            <div className={styles.HotelsTestimonialText + ' border border-2 rounded p-4'}>
              <h4>outstanding home away from home</h4>
              <p>
                "Great facilities, food and a welcoming staff make this my go-to
                for work/leisure travel in PNW!"
              </p>
            </div>
            <div className={styles.HotelsTestimonialText + ' border border-2 rounded p-4'}>
              <h4>always a great place to stay</h4>
              <p>
                "Their restaurants (Splash and Polaris) have excellent healthy
                food. Super friendly people. Will always come back to this
                hotel."
              </p>
            </div>
            <div className={styles.HotelsTestimonialText + ' border border-2 rounded p-4'}>
              <h4>amazing place to stay here</h4>
              <p>
                "The staff was so friendly and professional, super helpful too.
                The room was clean and had everything we needed."
              </p>
            </div>
            <div className={styles.HotelsTestimonialText + ' border border-2 rounded p-4'}>
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

        <div className={styles.map_cont + '  d-flex align-items-center justify-content-center'}>
          <div className="row container">
            <div className={styles.boraAddress + ' col-6 d-flex align-items-center'}>
              <div className={styles.address + ' p-1'}>
                <div className="d-flex justify-content-center">
                  <h1>7Seven Luxury Hotel El Nido</h1>
                </div>
                <div className="d-flex justify-content-center">
                  <h4>Matinloc Island, Brgy, El Nido, Palawan</h4>
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
