import React from 'react'
import styles from './Landing.module.css';
import Navigation from '../Nav/Nav';
// import video from '../../../public/video/vids.mp4';

class Landing extends React.Component {
    render() {
        return (
            <>
                <Navigation />
                <div className={styles.containerVideo + '  mb-5'}>
                    <video src='/video/vids.mp4' autoPlay className={styles.videoLanding} />
                </div>
                <div>
                    <div className={styles.landing_article_row + ' d-flex'}>
                        <div>
                            <h1>(Hotel Name)</h1>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <h3>As the premier boutique hotel on Seattle’s East Side, the Bellevue Club Hotel offers a luxury stay with 66 rooms and suites for those looking to stay well while traveling. Just steps from the amenities of our athletic and social club, the Bellevue Club, the newly-renovated rooms feature neutral pallets with</h3>
                            </div>
                            <div className='col'>
                                <h3>Pacific Northwest accents. While here, guests enjoy all the perks of being a member: Take a dip in the pool, join a cycling class or get pampered at our spa. Our guests live like locals with shopping, restaurants and other cultural venues just a town car ride away.</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Landing;