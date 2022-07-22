import React from 'react';
import styles from './About.module.css';

class About extends React.Component {
  render() {
    return (
      <>
        <div className={styles.HotelBoracay}>
          <div className={styles.containerImage}>
            <img
              src="https://api.crimsonhotel.com/storage/media/image/slide/6ea9ab1baa0efb9e19094440c317e21b/video-poster-slide/698d51a19d8a121ce581499d7b701668/about-us.jpg?v=1576117329"
              autoPlay
              className={styles.ImageBoracay}
              alt="Boracay"
            />
          </div>
        </div>
        {/* 
          Description Hotel
        */}
        <div className={styles.BoracayDescription + ' container'}>
          <h1>THE GEM OF THE SOUTH</h1>
          <p>
            Offering breathtaking design and stunning views. Opt for a City View
            room to enjoy breathtaking vistas of the gorgeous skyline. If you
            can turn your eyes away from the window, head down to sample
            outbursts of Mediterranean fare at Café Eight and share romantic
            after-dinner cocktails at the Lobby Lounge. Looking for the perfect
            spot to unwind? The photogenic poolside is bedecked with luxurious
            Dedon nest chairs and plush loungers that set the tone for a
            relaxing retreat. Every element is richly-designed and continues to
            innovate, as the hotel continuously elevates its facilities to
            enrich your stay.
          </p>
        </div>

        {/* 
          Rooms
        */}
        <div className="container pb-5">
          <div className="row">
            <div className={styles.HotelPackage + ' col-6'}>
              <div align="center" class="fond">
                <div
                  className={styles.carreaux_presentation_light}
                  style={{
                    backgroundImage: `url("https://api.crimsonhotel.com/storage/media/image/block/072b030ba126b2f4b2374f342be9ed44/branch-about-us-block-1/e995f98d56967d946471af29d7bf99f1/conversions/aboutimg_01-x-large.jpg?v=1576651062")`,
                  }}
                ></div>
              </div>
            </div>
            <div className={styles.HotelPackage + ' col-6'}>
              <div align="center" class="fond">
                <div
                  className={styles.carreaux_presentation_light}
                  style={{
                    backgroundImage: `url("https://api.crimsonhotel.com/storage/media/image/block/7f39f8317fbdb1988ef4c628eba02591/branch-about-us-block-1/d5cfead94f5350c12c322b5b664544c1/conversions/aboutimg_02-x-large.jpg?v=1576650684")`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="container">
            <p>
              Come and experience the refreshing enhancements that we’ve done
              today. Imagine peering palm trees lining the thoroughfares,
              picture-perfect sundowners and a view of the glitzy skyscrapers
              above Southern Manila. Before you know it, you too will be under
              its spell. Alabang is known as a flourishing city that is not as
              crowded as its neighbors in the greater Metro Manila. Crimson
              Hotel Filinvest City, Manila perfectly sits just by the border of
              Skyway, easily accessible to major roads, yet delivers a graceful
              urban oasis for your refuge from the daily grind. The hotel’s
              location in the heart of Alabang positions you just steps away
              from trendy shopping malls, dining options and plenty of exciting
              activities to discover.
            </p>
          </div>
          <div className="row">
            <div className={styles.HotelPackage + ' col-6'}>
              <div align="center" class="fond">
                <div
                  className={styles.carreaux_presentation_light}
                  style={{
                    backgroundImage: `url("https://api.crimsonhotel.com/storage/media/image/block/03afdbd66e7929b125f8597834fa83a4/branch-about-us-block-2/59c33016884a62116be975a9bb8257e3/conversions/aboutimg_03-x-large.jpg?v=1576650876")`,
                  }}
                ></div>
              </div>
            </div>
            <div className={styles.HotelPackage + ' col-6'}>
              <div align="center" class="fond">
                <div
                  className={styles.carreaux_presentation_light}
                  style={{
                    backgroundImage: `url("https://api.crimsonhotel.com/storage/media/image/block/ea5d2f1c4608232e07d3aa3d998e5135/branch-about-us-block-2/6c29793a140a811d0c45ce03c1c93a28/conversions/aboutimg_04-x-large.jpg?v=1576651034")`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="container">
            <p>
              Show-stopping piece Strikingly Filipino yet inspired by the global
              art scene, stop and stare at Crimson’s treasure trove of
              perfectly-crafted Filipino artworks spread across the gallery,
              public spaces and function rooms of the hotel. Dressed to the
              nines Elegant, bold and stylish -- each Crimson host reverberates
              the core of our service with couture ensembles designed by the
              Philippines’ most celebrated fashion designer – Mr. Francis
              Libiran.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default About;
