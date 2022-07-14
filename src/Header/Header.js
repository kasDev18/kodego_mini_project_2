import React from 'react';
import styles from './Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.Header + ' container'}>
        <h1>Sample Header - in header folder</h1>
      </div>
    );
  }
}

export default Header;
