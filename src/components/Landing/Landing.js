import React from 'react';
import styles from './Landing.module.css';
import Navigation from '../Nav/Nav';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import LandingCard from './LandingCard/LandingCard';
import axios from 'axios';
import i18next from 'i18next'

class Landing extends React.Component {
  render() {
    return (
      <>
        <div className={styles.containerVideo + '  mb-5'}>
          <video
            src="/video/vids.mp4"
            autoPlay
            loop
            muted
            className={styles.videoLanding}
          />
        </div>
        <div className={styles.hotel_opening_desc}>
          <div className={styles.hotel_name}>
            <div className="d-flex justify-content-center pt-5">
              <h1>{i18next.t('landing_title_opening')}</h1>
            </div>
            <div
              className={
                styles.hotel_description + ' d-flex align-items-center'
              }
            >
              <div className={styles.description + ' mt-2'}>
                <h5>
                  {i18next.t('landing_opening_1')}
                </h5>
              </div>
              <div className={styles.divider}>|</div>
              <div className={styles.description}>
                <h5>
                  {i18next.t('landing_opening_2')}
                </h5>
              </div>
            </div>
          </div>
          <div className={styles.offer}>
            <div className={styles + ' d-flex justify-content-center mt-5'}>
              <h2>{i18next.t('we_are_offering')}</h2>
            </div>
            <div className={styles.services_offer + ' d-flex p-5'}>
              <LandingCard />
            </div>
          </div>
        </div>
        <div className={styles.sample_img_banner}>
          <div className={styles + ' mb-5'}>
            <img
              src="https://api.crimsonhotel.com/storage/media/image/block/642e92efb79421734881b53e1e1b18b6/branch-home-block-3/6bc24fc1ab650b25b4114e93a98f1eba/banner_premierclub.jpg?v=1576652759"
              class="img-fluid"
              alt="..."
            />
            <h4 className={styles + ' position-absolute'}>
              <b>{i18next.t('landing_banner_1')}</b>
            </h4>
          </div>
          <div className={styles + ' mb-5'}>
            <img
              src="https://api.crimsonhotel.com/storage/media/image/block/f457c545a9ded88f18ecee47145a72c0/branch-home-block-3/c0c7c76d30bd3dcaefc96f40275bdc0a/manila-home-layer-3-b.jpg?v=1576117283"
              class="img-fluid"
              alt="..."
            />
            <h4 className={styles + ' position-absolute flex-end'}>
              <b>{i18next.t('landing_banner_2')}</b>
            </h4>
          </div>
          <div className={styles + ' mb-5'}>
            <img
              src="https://www.princehotels.com/shinyokohama/wp-content/uploads/sites/8/2019/06/Z7T7769%E5%B0%8F.jpg"
              class="img-fluid"
              alt="..."
            />
            <h4 className={styles + ' position-absolute flex-end'}>
              <b>
                {i18next.t('landing_banner_3')}
              </b>
            </h4>
          </div>
        </div>
      </>
    );
  }
}

export default Landing;
