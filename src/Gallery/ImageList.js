import styles from './Gallery.module.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return (
    <div className="container">
      <div className={styles.imageList}>{images}</div>
    </div>
  );
};
export default ImageList;
