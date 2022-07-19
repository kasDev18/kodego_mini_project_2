import React from 'react';
import styles from './LandingCard.module.css';
import stay_img from './LandingCardImages/stay.jpg'
import dine_img from './LandingCardImages/dine.jpg'
import gather_img from './LandingCardImages/gather.jpg'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

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
    { card_img_src: stay_img, card_title: 'Stay', card_text: 'From luxe amenities to local attractions, Bellevue Club Hotel has it all. With so many avenues to explore and memories to make, you’re going to want to stay a while. We can’t blame you.' },
    { card_img_src: dine_img, card_title: 'Dine', card_text: 'Refuel with whatever moves you – a morning espresso, tide-to-table lunch, craft cocktails, or an after-dinner indulgence. Our four distinct dining venues offer all this and more.' },
    { card_img_src: gather_img, card_title: 'Gather', card_text: 'Creating iconic moments is our specialty. We have stunning spaces for any size of gathering, so whether you’re hosting a corporate meeting or the wedding of the year, we’re here to help.' },
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
                  <a className={styles.example_c + ' text-center btn-round mx-2'} onClick={this.RedirectTagaytay} rel="nofollow noopener">Tagaytay</a>
                </div>
                <div>
                  <a className={styles.example_c + ' text-center btn-round mx-2'} onClick={this.RedirectBoracay} rel="nofollow noopener">Boracay</a>
                </div>
              </div>
              <div className='d-flex justify-content-center mt-2'>
                <div>
                  <a className={styles.example_c + ' text-center btn-round'} onClick={this.RedirectElNido} rel="nofollow noopener">El Nido</a>
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
