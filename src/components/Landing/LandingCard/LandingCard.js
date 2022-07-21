import React from 'react';
import styles from './LandingCard.module.css';
import stay_img from './LandingCardImages/stay.jpg'
import dine_img from './LandingCardImages/dine.jpg'
import gather_img from './LandingCardImages/gather.jpg'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import axios from 'axios';
import i18next from 'i18next'

class LandingCard extends React.Component {

  RedirectTagaytay() {
    setTimeout(() => {
      window.location = '/tagaytay'
    }, 1000)
  }

  RedirectBoracay() {
    setTimeout(() => {
      window.location = '/boracay'
    }, 1000)
  }

  RedirectElNido() {
    setTimeout(() => {
      window.location = '/el-nido'
    }, 1000)
  }

  card = [
    { card_img_src: stay_img, card_title: i18next.t('landing_card_title_1'), card_text: i18next.t('landing_card_text_1') },
    { card_img_src: dine_img, card_title: i18next.t('landing_card_title_2'), card_text: i18next.t('landing_card_text_2') },
    { card_img_src: gather_img, card_title: i18next.t('landing_card_title_3'), card_text: i18next.t('landing_card_text_3') },
  ]
  card_array = []

  CreateCardArray() {
    this.card_array = this.card.map((element) => (
      <div className='col'>
        <Card className={styles.card + ' text-center'}>
          <CardBody className='mx-2 pt-5'>
            <img src={element.card_img_src} class="img-fluid" alt="..." />
            <CardTitle className='mt-3'>
              <b>{element.card_title}</b>
            </CardTitle>
            <CardText>{element.card_text}</CardText>
            <div class="button_cont">
              <div className='d-flex justify-content-center'>
                <div>
                  <a className={styles.example_c + ' text-center btn-round mx-2'} onClick={this.RedirectTagaytay} rel="nofollow noopener">{i18next.t('landing_card_btn_1')}</a>
                </div>
                <div>
                  <a className={styles.example_c + ' text-center btn-round mx-2'} onClick={this.RedirectBoracay} rel="nofollow noopener">{i18next.t('landing_card_btn_2')}</a>
                </div>
              </div>
              <div className='d-flex justify-content-center mt-2'>
                <div>
                  <a className={styles.example_c + ' text-center btn-round'} onClick={this.RedirectElNido} rel="nofollow noopener">{i18next.t('landing_card_btn_3')}</a>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    ))
  }

  render() {
    this.CreateCardArray();
    return (
      <>
        {this.card_array}
      </>
    )
  }
}

export default LandingCard;
