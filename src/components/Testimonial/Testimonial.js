import React, { Component } from 'react';
import TestimonialDetails from './TestimonialDetails';
import styles from './Testimonial.module.css';

class TestimonialContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <div
            className={
              styles.HotelTestimonials +
              ' container-fluid d-flex justify-content-center align-items-center'
            }
          >
            <TestimonialDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default TestimonialContainer;
