import React from 'react';
import styles from './Gallery.module.css';

class SearchButtons extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>
          <div className={styles.ButtonSearch}>
            <h2 className="text-center">Gallery</h2>
            <button
              onClick={(e) => this.setState({ term: 'tagaytay' })}
              className="btn btn-primary"
            >
              Tagaytay
            </button>
            <button
              onClick={(e) => this.setState({ term: 'boracay' })}
              className="btn btn-primary"
            >
              Boracay
            </button>
            <button
              onClick={(e) => this.setState({ term: 'el-nido' })}
              className="btn btn-primary"
            >
              El-Nido
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchButtons;
