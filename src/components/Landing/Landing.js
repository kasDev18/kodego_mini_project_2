import React from 'react'
import styles from './Landing.module.css';
import Navigation from '../Nav/Nav';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
// import video from '../../../public/video/vids.mp4';

class Landing extends React.Component {
    awardsImage = [
        { src: 'https://www.bellevueclubhotel.com/wp-content/uploads/2019/06/the-knot.png' },
        { src: 'https://www.bellevueclubhotel.com/wp-content/uploads/2019/06/access-2017.png' },
        { src: 'https://www.bellevueclubhotel.com/wp-content/uploads/2019/06/tripadvisor.jpg' },
        { src: 'https://www.bellevueclubhotel.com/wp-content/uploads/2022/01/BestOf2021_Bellevue_Vertical.png' },
        { src: 'https://www.bellevueclubhotel.com/wp-content/uploads/2022/05/2022-WeddingRule-Editors-Choice.png' },
        { src: 'https://www.bellevueclubhotel.com/wp-content/uploads/2022/01/pms_aaa_4diamond_badge_thumb.png' }
    ];
    awardsImageArray = [];

    CreateAwardsImageArray() {
        this.awardsImageArray = this.awardsImage.map((element) => (
            <div className='mx-3'>
                <img src={element.src} class="rounded " alt="..." />
            </div>
        ))
    }

    render() {
        this.CreateAwardsImageArray()
        return (
            <>

                <Navigation />
                <div className={styles.containerVideo + '  mb-5'}>
                    <video src='/video/vids.mp4' autoPlay loop muted className={styles.videoLanding} />
                </div>
                <div className={styles.hotel_opening_desc}>
                    <div className={styles.hotel_name}>
                        <div className='d-flex justify-content-center pt-5'>
                            <h1>7Seven Luxury Hotel</h1>
                        </div>
                        <div className={styles.hotel_description + ' d-flex align-items-center'}>
                            <div className={styles.description + ' mt-2'}>
                                <h5>As the premier boutique hotel, the 7Seven Luxury Hotel offers a luxury stay with 66 rooms and suites for those looking to stay well while traveling. Just steps from the amenities of our athletic and social club, the 7Seven Club, the newly-renovated rooms feature neutral pallets with</h5>
                            </div>
                            <div className={styles.divider}>|</div>
                            <div className={styles.description}>
                                <h5>Pacific Northwest accents. While here, guests enjoy all the perks of being a member: Take a dip in the pool, join a cycling class or get pampered at our spa. Our guests live like locals with shopping, restaurants and other cultural venues just a town car ride away.</h5>
                            </div>
                        </div>
                    </div>
                    <div className={styles.offer}>
                        <div className={styles + ' d-flex justify-content-center mt-5'}>
                            <h2>We Are Offering</h2>
                        </div>
                        <div className={styles.services_offer + ' d-flex p-5'}>
                            <div className='col'>
                                <Card className={styles.card + ' text-center'}>
                                    <CardBody className='mx-2 pt-5'>
                                        <img src="https://www.corinthia.com/media/2106/corinthia-prague-superior-city-view-room.jpg" class="img-fluid" alt="..." />
                                        <CardTitle className='mt-3'>
                                            <b>STAY</b>
                                        </CardTitle>
                                        <CardText>From luxe amenities to local attractions, Bellevue Club Hotel has it all. With so many avenues to explore and memories to make, you’re going to want to stay a while. We can’t blame you.</CardText>
                                        <div class="button_cont">
                                            <div className='d-flex justify-content-center'>
                                                <Link to="/tagaytay">
                                                    <a className={styles.example_c + ' text-center btn-round mx-2'} href="add-website-here" target="_blank" rel="nofollow noopener">Tagaytay</a>
                                                </Link>
                                                <Link to="/boracay">
                                                    <a className={styles.example_c + ' text-center btn-round mx-2'} href="add-website-here" target="_blank" rel="nofollow noopener">Boracay</a>
                                                </Link>
                                            </div>
                                            <div className='d-flex justify-content-center mt-2'>
                                                <Link to="/el-nido">
                                                    <a className={styles.example_c + ' text-center btn-round'} href="add-website-here" target="_blank" rel="nofollow noopener">El Nido</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className='col'>
                                <Card className={styles.card + ' text-center'}>
                                    <CardBody className='mx-2 pt-5'>
                                        <img src="https://www.prestigecatering.com.au/wp-content/uploads/2016/09/tea.jpg" class="img-fluid" alt="..." />
                                        <CardTitle className='mt-3'>
                                            <b>DINE</b>
                                        </CardTitle>
                                        <CardText>Refuel with whatever moves you – a morning espresso, tide-to-table lunch, craft cocktails, or an after-dinner indulgence. Our four distinct dining venues offer all this and more.</CardText>
                                        <div class="button_cont">
                                            <div className='d-flex justify-content-center'>
                                                <Link to="/tagaytay">
                                                    <a className={styles.example_c + ' text-center btn-round mx-2'} href="add-website-here" target="_blank" rel="nofollow noopener">Tagaytay</a>
                                                </Link>
                                                <Link to="/boracay">
                                                    <a className={styles.example_c + ' text-center btn-round mx-2'} href="add-website-here" target="_blank" rel="nofollow noopener">Boracay</a>
                                                </Link>
                                            </div>
                                            <div className='d-flex justify-content-center mt-2'>
                                                <Link to="/el-nido">
                                                    <a className={styles.example_c + ' text-center btn-round'} href="add-website-here" target="_blank" rel="nofollow noopener">El Nido</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className='col'>
                                <Card className={styles.card + ' text-center'}>
                                    <CardBody className='mx-2 pt-5'>
                                        <img src="https://yannidesignstudio.com/app/uploads/2019/08/the-drake-hotel-wedding-ceremony-reception-chicago-event-venue-floral-centerpieces-candles-lights-greenery-decoration-ideas.jpg" class="img-fluid" alt="..." />
                                        <CardTitle className='mt-3'>
                                            <b>GATHER</b>
                                        </CardTitle>
                                        <CardText>Creating iconic moments is our specialty. We have stunning spaces for any size of gathering, so whether you’re hosting a corporate meeting or the wedding of the year, we’re here to help.</CardText>
                                        <div class="button_cont">
                                            <div className='d-flex justify-content-center'>
                                                <Link to="/tagaytay">
                                                    <a className={styles.example_c + ' text-center btn-round mx-2'} href="add-website-here" target="_blank" rel="nofollow noopener">Tagaytay</a>
                                                </Link>
                                                <Link to="/boracay">
                                                    <a className={styles.example_c + ' text-center btn-round mx-2'} href="add-website-here" target="_blank" rel="nofollow noopener">Boracay</a>
                                                </Link>
                                            </div>
                                            <div className='d-flex justify-content-center mt-2'>
                                                <Link to="/el-nido">
                                                    <a className={styles.example_c + ' text-center btn-round'} href="add-website-here" target="_blank" rel="nofollow noopener">El Nido</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.sample_img_banner}>
                    <div className={styles + ' mb-5'}>
                        <img src="https://api.crimsonhotel.com/storage/media/image/block/642e92efb79421734881b53e1e1b18b6/branch-home-block-3/6bc24fc1ab650b25b4114e93a98f1eba/banner_premierclub.jpg?v=1576652759" class="img-fluid" alt="..." />
                        <h4 className={styles + ' position-absolute'}>
                            <b>OUR GUESTROOMS OFFER COMFORT, FAMILIARITY AND HOMELINESS</b>
                        </h4>
                    </div>
                    <div className={styles + ' mb-5'}>
                        <img src="https://api.crimsonhotel.com/storage/media/image/block/f457c545a9ded88f18ecee47145a72c0/branch-home-block-3/c0c7c76d30bd3dcaefc96f40275bdc0a/manila-home-layer-3-b.jpg?v=1576117283" class="img-fluid" alt="..." />
                        <h4 className={styles + ' position-absolute flex-end'}>
                            <b>CONTEMPORARY CUISINE WITH FOCUS ON FRESH & HEALTHY</b>
                        </h4>
                    </div>
                    <div className={styles + ' mb-5'}>
                        <img src="https://www.princehotels.com/shinyokohama/wp-content/uploads/sites/8/2019/06/Z7T7769%E5%B0%8F.jpg" class="img-fluid" alt="..." />
                        <h4 className={styles + ' position-absolute flex-end'}>
                            <b>MEETINGS, SEMINARS, CONVENTIONS, DEBUTS, OR WEDDINGS AT 7SEVEN</b>
                        </h4>
                    </div>
                </div>
                <div className={styles.awards + ' d-flex justify-content-center align-items-center'}>
                    {this.awardsImageArray}
                </div>
                <div className={styles.hotel_locations + ' justify-content-center bg-dark mt-5 text-uppercase'}>
                    <div className={styles.hotel_locations_content}>
                        <div className=''>
                            <div className="credits ml-auto d-flex justify-content-center text-light mb-5">
                                <span className="copyright">
                                    © {new Date().getFullYear()}, made with{" "}
                                    <i className="fa fa-heart heart" /> by <span className='text-warning'>7Seven</span> | Luxury Hotel
                                </span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h4 className='text-white'>Locations</h4>
                        </div>
                        <div className='d-flex justify-content-center mb-5'>
                            <h6 className='text-white'>7seven Tagaytay <span className='text-white mx-2 '> |</span></h6>
                            <h6 className='text-white'>7seven Boracay <span className='text-white mx-2'> |</span></h6>
                            <h6 className='text-white'>7seven El Nido </h6>
                        </div>
                        <hr className='bg-light mb-5'></hr>
                        <div className='d-flex justify-content-center'>
                            <h4 className='text-white'>Quick Links</h4>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h6 className='text-white'>Careers <span className='text-white mb-2 mx-2'> |</span></h6>
                            <h6 className='text-white'>Privacy Policy <span className='text-white mx-2'> |</span></h6>
                            <h6 className='text-white'>Cookie Policy <span className='text-white mx-2'> |</span></h6>
                            <h6 className='text-white'>Reservation Policy </h6>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.media_title + ' pt-5'}>
                        <h5 className='text-light text-transform-uppercase'>Stay Connected</h5>
                    </div>
                    <ul className={styles.media_footer_cont + ' d-flex '}>
                        <li>
                            <a href="#">
                                <i className={styles.media_footer + ' fab fa-facebook-f'}></i>    </a>
                        </li>
                        <li>
                            <a href="#"><i className={styles.media_footer + ' fab fa-twitter'}></i></a>
                        </li>
                        <li>
                            <a href="#"><i className={styles.media_footer + ' fab fa-linkedin-in'}></i></a></li>
                        <li>
                            <a href="#"><i className={styles.media_footer + ' fab fa-google-plus-g'}></i></a></li>
                    </ul>

                </div>

            </>
        )
    }
}


export default Landing;