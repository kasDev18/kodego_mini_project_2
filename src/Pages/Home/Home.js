import React from 'react';
import styles from './Home.module.css';
import HomeCarousel from './HomeCarousel';
import video from './vids.mp4'

class Home extends React.Component {
  render() {
    return (
      <>
        <div className={styles.containerVideo}>
            <video src={video}  autoPlay className={styles.videoLanding}/>
            <small>Welcome to</small> <br />
          </div>
        <div className={styles.HeadCarousel}>
          <HomeCarousel />
          {/* 
          SOURCE
           https://demos.creative-tim.com/paper-kit-react/#/documentation/carousel 
           */}
        </div>

        {/* 
          Packages
        */}
        <div>
          <div>
            <div className="container mt-5 d-flex ">
              <img src="tagaytay/tagaytay2.webp" alt="tagaytay" />
              <div className="ml-5 text-center ">
                <h1>Package 1</h1>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                incidunt iste amet minus fugit veniam pariatur, itaque suscipit
                repudiandae nam minima sequi possimus corrupti recusandae hic
                perferendis rerum ullam sint!
              </div>
            </div>
          </div>
          <div>
            <div className="container mt-5 d-flex ">
              <div className="ml-5 text-center ">
                <h1>Package 2</h1>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                incidunt iste amet minus fugit veniam pariatur, itaque suscipit
                repudiandae nam minima sequi possimus corrupti recusandae hic
                perferendis rerum ullam sint!
              </div>
              <img src="tagaytay/tagaytay2.webp" alt="tagaytay" />
            </div>
          </div>
          <div>
            <div className="container mt-5 d-flex ">
              <img src="tagaytay/tagaytay2.webp" alt="tagaytay" />
              <div className="ml-5 text-center ">
                <h1>Package 3</h1>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                incidunt iste amet minus fugit veniam pariatur, itaque suscipit
                repudiandae nam minima sequi possimus corrupti recusandae hic
                perferendis rerum ullam sint!
              </div>
            </div>
          </div>
        </div>

        {/* 
          TESTIMONIALS
        */}
        <div>
          <div className={styles.HomeTestimonials + ' container-md gap-4 mt-5'}>
            <div>
              <img
                className={styles.HomeAvatar}
                src="tagaytay/tagaytay2.webp"
                alt="123"
              />

              <p className={styles.HomeText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos magni, possimus impedit nobis consequatur
                perspiciatis distinctio repellat architecto quidem rem. Animi
                maiores aperiam molestias sapiente nobis iste, enim repudiandae
                numquam!
              </p>
            </div>
            <div>
              <img
                className={styles.HomeAvatar}
                src="tagaytay/tagaytay2.webp"
                alt="123"
              />

              <p className={styles.HomeText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos magni, possimus impedit nobis consequatur
                perspiciatis distinctio repellat architecto quidem rem. Animi
                maiores aperiam molestias sapiente nobis iste, enim repudiandae
                numquam!
              </p>
            </div>
            <div>
              <img
                className={styles.HomeAvatar}
                src="tagaytay/tagaytay2.webp"
                alt="123"
              />

              <p className={styles.HomeText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos magni, possimus impedit nobis consequatur
                perspiciatis distinctio repellat architecto quidem rem. Animi
                maiores aperiam molestias sapiente nobis iste, enim repudiandae
                numquam!
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
