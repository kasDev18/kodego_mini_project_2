import React from 'react';
import styles from './ProductCart.module.css';
import ProductCartImages from './ProductCartImages';

class ProductCart extends React.Component {
  render() {
    return (
      <div className={styles.Header + ' '}>
        <ProductCartImages />
      </div>

    );
  }
}

export default ProductCart;
