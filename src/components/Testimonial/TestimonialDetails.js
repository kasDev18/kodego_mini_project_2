import React from 'react';
import styles from './Testimonial.module.css';

class TestimonialDetails extends React.Component {
  content = [
    {
      title: 'outstanding home away from home',
      testimonial: `"Great facilities, food and a welcoming staff make this my go-to
    for work/leisure travel in PNW!"`,
      id: 1,
    },
    {
      title: 'always a great place to stay',
      testimonial: `"Their restaurants (Splash and Polaris) have excellent healthy
        food. Super friendly people. Will always come back to this
        hotel."`,
      id: 2,
    },
    {
      title: 'amazing place to stay here',
      testimonial: ` "The staff was so friendly and professional, super helpful too.
        The room was clean and had everything we needed."`,
      id: 3,
    },
    {
      title: 'excellent hotel with club experience',
      testimonial: `"This is a high-class property with a boutique hotel feel. I
        have stayed here many times over the years and it has always
        been a consistently good experience."`,
      id: 4,
    },
  ];
  content_array = [];
  CreateArrayContent() {
    this.content_array = this.content.map((element) => (
      <div
        className={
          styles.HotelsTestimonialText + ' border border-2 rounded p-4'
        }
      >
        <h4>{element.title}</h4>
        <p>{element.testimonial}</p>
      </div>
    ));
  }
  render() {
    this.CreateArrayContent();
    return <>{this.content_array}</>;
  }
}

export default TestimonialDetails;
