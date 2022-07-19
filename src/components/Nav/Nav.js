/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from 'react';
// nodejs library that concatenates stringsnpx generate-react-cli component About
import classnames from 'classnames';
import styles from './Nav.module.css';
// reactstrap components
import {
  Button,
  Collapse,
  Navbar,
  Container,
  Modal,
  UncontrolledTooltip,
  Nav,
} from 'reactstrap';
import Loader from '../Loader/Loader';
import LanguageSelector from './LanguageSelector/LanguageSelector';
// import PhFlag from '/plugins/flag-icon-css/flags/1x1/ph.svg'

function IndexNavbar() {
  // Redirection Navbar
  const homepage = () => {
    setTimeout(() => {
      window.location = '/';
    }, 1500);
  };
  const [redirectTagaytay, setRedirectTagaytay] = useState(false);
  const handleSubmitTagaytay = async () => {
    setRedirectTagaytay(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    window.location = '/tagaytay';
  };
  const [redirectBoracay, setRedirectBoracay] = useState(false);
  const handleSubmitBoracay = async () => {
    setRedirectBoracay(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    window.location = '/boracay';
  };
  const [redirectElNido, setRedirectElNido] = useState(false);
  const handleSubmitElNido = async () => {
    setRedirectElNido(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    window.location = '/el-nido';
  };
  const [redirectRoomSolo, setRedirectRoomSolo] = useState(false);
  const handleSubmitRoomSolo = async () => {
    setRedirectRoomSolo(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    window.location = '/services-rooms-solo';
  };
  const [redirectRoomDouble, setRedirectRoomDouble] = useState(false);
  const handleSubmitRoomDouble = async () => {
    setRedirectRoomDouble(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    window.location = '/services-rooms-double';
  };
  const [redirectRoomDeluxe, setRedirectRoomDeluxe] = useState(false);
  const handleSubmitRoomDeluxe = async () => {
    setRedirectRoomDeluxe(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    window.location = '/services-rooms-deluxe';
  };
  const [redirectRoomPremier, setRedirectRoomPremier] = useState(false);
  const handleSubmitRoomPremier = async () => {
    setRedirectRoomPremier(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    window.location = '/services-rooms-premier';
  };
  const [redirectGatheringWedding, setRedirectGatheringWedding] =
    useState(false);
  const handleSubmitGatheringWedding = async () => {
    setRedirectGatheringWedding(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    window.location = '/gathering-wedding';
  };
  const [redirectGatheringCorporate, setRedirectGatheringCorporate] =
    useState(false);
  const handleSubmitGatheringCorporate = async () => {
    setRedirectGatheringCorporate(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    window.location = '/gathering-corporate';
  };
  const [redirectGatheringMilestone, setRedirectGatheringMilestone] =
    useState(false);
  const handleSubmitGatheringMilestone = async () => {
    setRedirectGatheringMilestone(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    window.location = '/gathering-milestone';
  };
  const [redirectLibraryAbout, setRedirectLibraryAbout] = useState(false);
  const handleSubmitLibraryAbout = async () => {
    setRedirectLibraryAbout(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    window.location = '/about';
  };
  const [redirectLibraryAmenities, setRedirectLibraryAmenities] =
    useState(false);
  const handleSubmitLibraryAmenities = async () => {
    setRedirectLibraryAmenities(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    window.location = '/amenities';
  };
  const [redirectLibraryGallery, setRedirectLibraryGallery] = useState(false);
  const handleSubmitLibraryGallery = async () => {
    setRedirectLibraryGallery(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    window.location = '/gallery';
  };

  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [liveDemo, setLiveDemo] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  };
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor('');
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor('navbar-transparent');
      }
    };

    window.addEventListener('scroll', updateNavbarColor);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  return (
    <>
      {/* Return Loading Animation */}
      {setRedirectTagaytay
        ? redirectTagaytay && (
          <>
            <img
              className={styles.image_loader}
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/90/b3/5b/escala-tagaytay.jpg?w=1200&h=-1&s=1"
            />
            <Loader />
          </>
        )
        : ''}
      {setRedirectBoracay
        ? redirectBoracay && (
          <>
            <img
              className={styles.image_loader}
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1630914997/blog/zzydhmcu7khdqixvlmxg.webp"
            />
            <Loader />
          </>
        )
        : ''}
      {setRedirectElNido
        ? redirectElNido && (
          <>
            <img
              className={styles.image_loader}
              src="https://www.kayak.com/rimg/himg/73/eb/75/hotelsdotcom-645023616-49873c22_w-273737.jpg?width=2160&height=1215&crop=true&outputtype=webp"
            />
            <Loader />
          </>
        )
        : ''}
      {setRedirectRoomSolo
        ? redirectRoomSolo && (
          <>
            <img
              className={styles.image_loader}
              src="https://www.kayak.com/rimg/himg/73/eb/75/hotelsdotcom-645023616-49873c22_w-273737.jpg?width=2160&height=1215&crop=true&outputtype=webp"
            />
            <Loader />
          </>
        )
        : ''}
      {setRedirectRoomDouble
        ? redirectRoomDouble && (
          <>
            <img
              className={styles.image_loader}
              src="https://www.kayak.com/rimg/himg/73/eb/75/hotelsdotcom-645023616-49873c22_w-273737.jpg?width=2160&height=1215&crop=true&outputtype=webp"
            />
            <Loader />
          </>
        )
        : ''}
      {setRedirectRoomDeluxe
        ? redirectRoomDeluxe && (
          <>
            <img
              className={styles.image_loader}
              src="https://www.kayak.com/rimg/himg/73/eb/75/hotelsdotcom-645023616-49873c22_w-273737.jpg?width=2160&height=1215&crop=true&outputtype=webp"
            />
            <Loader />
          </>
        )
        : ''}
      {setRedirectRoomPremier
        ? redirectRoomPremier && (
          <>
            <img
              className={styles.image_loader}
              src="https://www.kayak.com/rimg/himg/73/eb/75/hotelsdotcom-645023616-49873c22_w-273737.jpg?width=2160&height=1215&crop=true&outputtype=webp"
            />
            <Loader />
          </>
        )
        : ''}
      {setRedirectGatheringWedding
        ? redirectGatheringWedding && (
          <>
            <img
              className={styles.image_loader}
              src="https://www.kayak.com/rimg/himg/73/eb/75/hotelsdotcom-645023616-49873c22_w-273737.jpg?width=2160&height=1215&crop=true&outputtype=webp"
            />
            <Loader />
          </>
        )
        : ''}
      {setRedirectGatheringCorporate
        ? redirectGatheringCorporate && (
          <>
            <img
              className={styles.image_loader}
              src="https://www.kayak.com/rimg/himg/73/eb/75/hotelsdotcom-645023616-49873c22_w-273737.jpg?width=2160&height=1215&crop=true&outputtype=webp"
            />
            <Loader />
          </>
        )
        : ''}
      {setRedirectGatheringMilestone
        ? redirectGatheringMilestone && (
          <>
            <img
              className={styles.image_loader}
              src="https://www.kayak.com/rimg/himg/73/eb/75/hotelsdotcom-645023616-49873c22_w-273737.jpg?width=2160&height=1215&crop=true&outputtype=webp"
            />
            <Loader />
          </>
        )
        : ''}
      {setRedirectLibraryAbout
        ? redirectLibraryAbout && (
          <>
            <img
              className={styles.image_loader}
              src="https://www.kayak.com/rimg/himg/73/eb/75/hotelsdotcom-645023616-49873c22_w-273737.jpg?width=2160&height=1215&crop=true&outputtype=webp"
            />
            <Loader />
          </>
        )
        : ''}
      {setRedirectLibraryAmenities
        ? redirectLibraryAmenities && (
          <>
            <img
              className={styles.image_loader}
              src="https://www.kayak.com/rimg/himg/73/eb/75/hotelsdotcom-645023616-49873c22_w-273737.jpg?width=2160&height=1215&crop=true&outputtype=webp"
            />
            <Loader />
          </>
        )
        : ''}
      {setRedirectLibraryGallery
        ? redirectLibraryGallery && (
          <>
            <img
              className={styles.image_loader}
              src="https://www.kayak.com/rimg/himg/73/eb/75/hotelsdotcom-645023616-49873c22_w-273737.jpg?width=2160&height=1215&crop=true&outputtype=webp"
            />
            <Loader />
          </>
        )
        : ''}
      {/* End Return Loading Animation */}

      <Navbar
        className={classnames('fixed-top', navbarColor)}
        id="navbar_cont"
        expand="lg"
      >
        <div
          class="navbar-brand font-weight-bolder ms-sm-3 text-warning"
          rel="tooltip"
          data-placement="bottom"
          id="bottom"
          onClick={homepage}
        >
          7Seven luxury hotel{' '}
          <img
            src="http://static.pinnula.fr/news/i/win7-yellow-logo.png"
            width="50px"
            height="50px"
            class="img-fluid border rounded-circle"
            alt="..."
          />
          <UncontrolledTooltip
            placement="bottom"
            className="bg-light"
            target="bottom"
            delay={0}
          >
            7Seven Luxury Hotel
          </UncontrolledTooltip>
        </div>
        <Container>
          <Collapse
            className="justify-content-end"
            navbar
            isOpen={navbarCollapse}
          >
            <div>
              <button
                class="navbar-toggler shadow-none ms-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon mt-2">
                  <span class="navbar-toggler-bar bar1"></span>
                  <span class="navbar-toggler-bar bar2"></span>
                  <span class="navbar-toggler-bar bar3"></span>
                </span>
              </button>
              <div
                class="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100"
                id="navigation"
              >
                <ul class="navbar-nav navbar-nav-hover ms-auto">
                  <li class="nav-item dropdown dropdown-hover mx-2">
                    <div
                      className={
                        styles.dropdown_cont +
                        ' nav-link ps-2 d-flex cursor-pointer align-items-center'
                      }
                      id="dropdownMenuPages"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fa-solid fa-hotel"></i>
                      Choose Your Hotel
                    </div>
                    <div
                      className={
                        styles.dropdown_cont +
                        ' dropdown-menu ms-n0 dropdown-md p-3 border-radius-xl mt-0 mt-lg-5'
                      }
                      aria-labelledby="dropdownMenuPages"
                    >
                      <div class="d-none d-lg-block">
                        <h6
                          className={
                            styles +
                            ' dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1'
                          }
                        >
                          Hotel Location
                        </h6>
                        <div
                          className={
                            styles.navigation_row +
                            ' dropdown-item border-radius-md'
                          }
                          onClick={
                            setRedirectTagaytay ? handleSubmitTagaytay : ''
                          }
                        >
                          <span>Tagaytay</span>
                        </div>
                        <div
                          className={
                            styles.navigation_row +
                            ' dropdown-item border-radius-md'
                          }
                          onClick={
                            setRedirectBoracay ? handleSubmitBoracay : ''
                          }
                        >
                          <span>Boracay</span>
                        </div>
                        <div
                          className={
                            styles.navigation_row +
                            ' dropdown-item border-radius-md'
                          }
                          onClick={setRedirectElNido ? handleSubmitElNido : ''}
                        >
                          <span>El Nido</span>
                        </div>
                      </div>

                      {/* <div class="d-lg-none">
                      <h6 class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
                        Landing Pages
                      </h6>

                      <Link to="/about" class="dropdown-item border-radius-md">
                        <span>About Us</span>
                      </Link>
                      <Link
                        to="/el-nido"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Contact Us</span>
                      </Link>
                      <a
                        href="./pages/author.html"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Author</span>
                      </a>

                      <h6 class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1 mt-3">
                        Account
                      </h6>
                      <a
                        href="./pages/sign-in.html"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Sign In</span>
                      </a>
                    </div> */}
                    </div>
                  </li>

                  <li class="nav-item dropdown dropdown-hover mx-2">
                    <div
                      className={
                        styles.dropdown_cont +
                        ' nav-link ps-2 d-flex cursor-pointer align-items-center'
                      }
                      id="dropdownMenuBlocks"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fa-solid fa-bell-concierge"></i>
                      Services
                    </div>
                    <ul
                      class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3"
                      aria-labelledby="dropdownMenuBlocks"
                    >
                      <div class="d-none d-lg-block">
                        <li class="nav-item dropdown dropdown-hover dropdown-subitem">
                          <div
                            className={
                              styles.navigation_row +
                              ' dropdown-item border-radius-md'
                            }
                          >
                            <div class="w-100 d-flex align-items-center justify-content-between">
                              <div>
                                <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                  Rooms
                                </h6>
                                <span class="text-sm">
                                  Rooms from your preference
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                            <div
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                              onClick={
                                setRedirectRoomSolo ? handleSubmitRoomSolo : ''
                              }
                            >
                              Solo
                            </div>
                            <div
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                              onClick={
                                setRedirectRoomDouble
                                  ? handleSubmitRoomDouble
                                  : ''
                              }
                            >
                              Double
                            </div>
                            <div
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                              onClick={
                                setRedirectRoomDeluxe
                                  ? handleSubmitRoomDeluxe
                                  : ''
                              }
                            >
                              Deluxe
                            </div>
                            <div
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                              onClick={
                                setRedirectRoomPremier
                                  ? handleSubmitRoomPremier
                                  : ''
                              }
                            >
                              Premier
                            </div>
                          </div>
                        </li>

                        <li class="nav-item dropdown dropdown-hover dropdown-subitem">
                          <div
                            className={
                              styles.navigation_row +
                              ' dropdown-item border-radius-md'
                            }
                          >
                            <div class="w-100 d-flex align-items-center justify-content-between">
                              <div className={styles.navigation_row}>
                                <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                  Gatherings
                                </h6>
                                <span class="text-sm">Event Plans</span>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                            <div
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                              onClick={
                                setRedirectGatheringWedding
                                  ? handleSubmitGatheringWedding
                                  : ''
                              }
                            >
                              Weddings
                            </div>
                            <div
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                              onClick={
                                setRedirectGatheringCorporate
                                  ? handleSubmitGatheringCorporate
                                  : ''
                              }
                            >
                              Corporate
                            </div>
                            <div
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                              onClick={
                                setRedirectGatheringMilestone
                                  ? handleSubmitGatheringMilestone
                                  : ''
                              }
                            >
                              Milestone
                            </div>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </li>

                  <li class="nav-item dropdown dropdown-hover mx-2">
                    <div
                      className={
                        styles.dropdown_cont +
                        ' nav-link ps-2 d-flex cursor-pointer align-items-center'
                      }
                      id="dropdownMenuDocs"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fa-solid fa-newspaper"></i>
                      Docs
                    </div>
                    <ul
                      class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive mt-0 mt-lg-3 p-3 border-radius-lg"
                      aria-labelledby="dropdownMenuDocs"
                    >
                      <div class="d-none d-lg-block">
                        <ul class="list-group">
                          <li class="nav-item list-group-item border-0 p-0">
                            <div
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                              onClick={
                                setRedirectLibraryAbout
                                  ? handleSubmitLibraryAbout
                                  : ''
                              }
                            >
                              <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                About Us
                              </h6>
                              <span class="text-sm">
                                All about overview, quick start, license and
                                contents
                              </span>
                            </div>
                          </li>
                          <li class="nav-item list-group-item border-0 p-0">
                            <div
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                              onClick={
                                setRedirectLibraryGallery
                                  ? handleSubmitLibraryGallery
                                  : ''
                              }
                            >
                              <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                Gallery
                              </h6>
                              <span class="text-sm">
                                See our colors, icons and typography
                              </span>
                            </div>
                          </li>
                          <li class="nav-item list-group-item border-0 p-0">
                            <div
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                              onClick={
                                setRedirectLibraryAmenities
                                  ? handleSubmitLibraryAmenities
                                  : ''
                              }
                            >
                              <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                Amenities
                              </h6>
                              <span class="text-sm">
                                Explore our collection of fully designed
                                components
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* <div class="row d-lg-none">
                      <div class="col-md-12 g-0">
                        <a
                          class="dropdown-item py-2 ps-3 border-radius-md"
                          href="./pages/about-us.html"
                        >
                          <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Getting Started
                          </h6>
                          <span class="text-sm">
                            All about overview, quick start, license and
                            contents
                          </span>
                        </a>

                        <a
                          class="dropdown-item py-2 ps-3 border-radius-md"
                          href="./pages/about-us.html"
                        >
                          <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Foundation
                          </h6>
                          <span class="text-sm">
                            See our colors, icons and typography
                          </span>
                        </a>

                        <a
                          class="dropdown-item py-2 ps-3 border-radius-md"
                          href="./pages/about-us.html"
                        >
                          <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Components
                          </h6>
                          <span class="text-sm">
                            Explore our collection of fully designed components
                          </span>
                        </a>

                        <a
                          class="dropdown-item py-2 ps-3 border-radius-md"
                          href="./pages/about-us.html"
                        >
                          <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Plugins
                          </h6>
                          <span class="text-sm">
                            Check how you can integrate our plugins
                          </span>
                        </a>

                        <a
                          class="dropdown-item py-2 ps-3 border-radius-md"
                          href="./pages/about-us.html"
                        >
                          <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Utility Classes
                          </h6>
                          <span class="text-sm">
                            For those who want flexibility, use our utility
                            classes
                          </span>
                        </a>
                      </div>
                    </div> */}
                    </ul>
                  </li>
                  <li class="nav-item dropdown dropdown-hover mx-2">
                    <LanguageSelector />
                  </li>
                  <li class="nav-item my-auto ms-3 ms-lg-0">
                    <a
                      className={
                        styles.dropdown_cont +
                        ' btn btn-sm  bg-warning p-2 mb-0 me-1 mt-2 mt-md-0 text-white'
                      }
                      onClick={() => setLiveDemo(true)}
                    >
                      Signup/Login
                    </a>

                    {/* Modal */}
                    <Modal isOpen={liveDemo} toggle={() => setLiveDemo(false)}>
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLiveLabel">
                          Modal title
                        </h5>
                        <button
                          aria-label="Close"
                          className="close"
                          data-dismiss="modal"
                          type="button"
                          onClick={() => setLiveDemo(false)}
                        >
                          <span aria-hidden={true}>×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>Woohoo, you're reading this text in a modal!</p>
                      </div>
                      <div className="modal-footer">
                        <div className="left-side">
                          <Button
                            className="btn-link"
                            color="default"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => setLiveDemo(false)}
                          >
                            Never mind
                          </Button>
                        </div>
                        <div className="divider" />
                        <div className="right-side">
                          <Button
                            className="btn-link"
                            color="danger"
                            type="button"
                            onClick={() => setLiveDemo(false)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </Modal>
                  </li>
                </ul>
              </div>
            </div>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
