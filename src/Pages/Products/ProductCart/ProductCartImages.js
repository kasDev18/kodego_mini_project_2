import React from 'react';
import video from './vids.mp4'
import styles from './ProductCart.module.css'

class ProductCartImages extends React.Component {
  render() {
    return (
      <div className={styles.containerVideo}>
        <video src={video}  autoPlay className={styles.videoLanding}/>
        <small>Welcome to</small> <br />
        Profile Pulse
      </div>
    );
  }
}
{
  /* <Card.Img variant="top" src="assets/img/tagaytay/tagaytay1.webp" />; */
}

export default ProductCartImages;
