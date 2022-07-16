import React from 'react';
import video from './vids.mp4'
import styles from './ProductCart.module.css'

class ProductCartImages extends React.Component {
  render() {
    return (
      <div className={styles.body + ' container mb-5  '}>
        <h1>Product Details - in product cart folder</h1>

        <div className="row">
          <div className="col-6">
            <Card.Img variant="top" src="assets/tagaytay/tagaytay1.webp" />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6  ">
                <Card.Img variant="top" src="assets/tagaytay/tagaytay1.webp" />
              </div>
              <div className="col-6">
                <Card.Img variant="top" src="assets/tagaytay/tagaytay1.webp" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <Card.Img variant="top" src="assets/tagaytay/tagaytay1.webp" />
              </div>
              <div className="col-6">
                <Card.Img variant="top" src="assets/tagaytay/tagaytay1.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
{
  /* <Card.Img variant="top" src="assets/tagaytay/tagaytay1.webp" />; */
}

export default ProductCartImages;
