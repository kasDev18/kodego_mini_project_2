import React from 'react';
import styles from './Footer.module.css';
import Newsletter_Modal from '../Newsletter_Modal/Newsletter_Modal';
import { UncontrolledTooltip } from 'reactstrap';
import axios from 'axios';
import i18next from 'i18next'

class Footer extends React.Component {
  awardsImage = [
    { src: 'https://www.bellevueclubhotel.com/wp-content/uploads/2019/06/the-knot.png' },
    { src: 'https://www.bellevueclubhotel.com/wp-content/uploads/2019/06/access-2017.png' },
    { src: 'https://www.bellevueclubhotel.com/wp-content/uploads/2019/06/tripadvisor.jpg' },
    { src: 'https://www.bellevueclubhotel.com/wp-content/uploads/2022/01/BestOf2021_Bellevue_Vertical.png' },
    { src: 'https://www.bellevueclubhotel.com/wp-content/uploads/2022/05/2022-WeddingRule-Editors-Choice.png' },
    { src: 'https://www.bellevueclubhotel.com/wp-content/uploads/2022/01/pms_aaa_4diamond_badge_thumb.png' }
  ];
  awardsImageArray = [];
  mediaFooterIcon = [
    { id: 'faceboook', iconClass: ' fab fa-facebook-f' },
    { id: 'twitter', iconClass: ' fab fa-twitter' },
    { id: 'linkedin', iconClass: ' fab fa-linkedin-in' },
    { id: 'google-plus', iconClass: ' fab fa-google-plus-g' },
  ]
  mediaFooterIconArray = [];

  CreateAwardsImageArray() {
    this.awardsImageArray = this.awardsImage.map((element) => (
      <div className={styles.container_awards + ' container btn'} id={element.id} data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
        <img src={element.src} />
      </div>
    ))
  }

  CreatemediaFooterIconArray() {
    this.mediaFooterIconArray = this.mediaFooterIcon.map((element) => (
      <li>
        <a href="#">
          <i className={styles.media_footer + element.iconClass}></i>    </a>
      </li>
    ))
  }


  render() {
    this.CreateAwardsImageArray();
    this.CreatemediaFooterIconArray();
    return (
      <>
        <div className={styles.awards + ' d-flex justify-content-center align-items-center'}>
          {this.awardsImageArray}
        </div>
        <div className={styles.hotel_locations + ' justify-content-center bg-dark mt-5 text-uppercase'}>
          <div className={styles.hotel_locations_content}>
            <div className=''>
              <div className="credits ml-auto d-flex justify-content-center text-light mb-5">
                <span className="copyright">
                  © {new Date().getFullYear()}, {i18next.t('footer_made_with')}{" "}
                  <i className="fa fa-heart heart" /> {i18next.t('footer_by')} <span className='text-warning'>{i18next.t('footer_seven')}</span> {i18next.t('footer_luxury_hotel')}
                </span>
              </div>
            </div>
            <div className='d-flex justify-content-center'>
              <h4 className='text-white'>{i18next.t('footer_locations')}</h4>
            </div>
            <div className='d-flex justify-content-center mb-5'>
              <h6 className='text-white'>{i18next.t('footer_seven_tagaytay')} <span className='text-white mx-2 '> |</span></h6>
              <h6 className='text-white'>{i18next.t('footer_seven_boracay')} <span className='text-white mx-2'> |</span></h6>
              <h6 className='text-white'>{i18next.t('footer_seven_el_nido')} </h6>
            </div>
            <hr className='bg-light mb-5'></hr>
            <div className='d-flex justify-content-center'>
              <h4 className='text-white'>{i18next.t('footer_quick_links')}</h4>
            </div>
            <div className='d-flex justify-content-center'>
              <h6 className='text-white'>{i18next.t('footer_careers')} <span className='text-white mb-2 mx-2'> |</span></h6>
              <h6 className='text-white'>{i18next.t('footer_privacy')} <span className='text-white mx-2'> |</span></h6>
              <h6 className='text-white'>{i18next.t('footer_cookie')} <span className='text-white mx-2'> |</span></h6>
              <h6 className='text-white'>{i18next.t('footer_reserve')} </h6>
            </div>
          </div>
        </div>
        <div className={styles.footer + ' d-flex'}>
          <div className='col'>
            <div className={styles.media_title + ' pt-5 d-flex justify-content-end mx-3 px-4'}>
              <h5 className='text-light text-transform-uppercase'>{i18next.t('footer_stay')}</h5>
            </div>
            <ul className={styles.media_footer_cont + ' d-flex justify-content-end'}>
              {this.mediaFooterIconArray}
            </ul>

          </div>
          <div className='col '>
            <div className={styles.media_title + ' pt-5 mb-4'}>
              <h5 className='text-light text-transform-uppercase'>{i18next.t('footer_newsletter')}</h5>
            </div>
            <div className={styles.media_title}>
              <Newsletter_Modal />
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Footer;
