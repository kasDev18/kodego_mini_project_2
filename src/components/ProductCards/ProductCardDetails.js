import React from 'react';
import styles from './ProductCards.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCardDetails = () => {
  return (
    <div className="d-inline-block mr-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="assets/img/tagaytay/tagaytay1.webp" />
        <Card.Body>
          <Card.Title>Tagaytay, Philippines</Card.Title>
          <Card.Text>
            <div>Mounts Palay Palay, Mataas na Gulod</div>
            <div>July 12</div>
            <div className={styles + ' bold'}>PHP1,598 night</div>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCardDetails;
