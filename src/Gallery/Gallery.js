import React from 'react';
import unsplash from '../Gallery/ApiUnsplash';
import SearchButtons from './SearchButtons';
import ImageList from './ImageList';
import styles from './Gallery.module.css';

class Gallery extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div>
        <div>
          <div className={styles.containerImage}>
            <img
              src="images/gallery.webp"
              autoPlay
              className={styles.galleryImage}
              alt="Boracay"
            />
          </div>
        </div>

        <div className={styles.gallerywrapper}>
          <SearchButtons onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default Gallery;
