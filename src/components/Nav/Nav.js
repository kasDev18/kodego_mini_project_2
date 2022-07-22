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
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import Loader from '../Loader/Loader';
import axios from 'axios';
import i18next from 'i18next';
import SignIn from '../SignIn/SignIn';

function IndexNavbar() {
  // Language Selector
  const changeLanguage = (option) => {
    localStorage.setItem('lang', option.target.value);
    window.location.reload();
  };
  const lang = localStorage.getItem('lang') || 'en';

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
              alt="..."
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
              alt="..."
              className={styles.image_loader}
              src="https://www.discoveryshoresboracay.com/files/2017/05/View-from-the-upper-clusters.jpg"
            />
            <Loader />
          </>
        )
        : ''}
      {setRedirectElNido
        ? redirectElNido && (
          <>
            <img
              alt="..."
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
              alt="..."
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
              alt="..."
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
              alt="..."
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
              alt="..."
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
              alt="..."
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
              alt="..."
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
              alt="..."
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
              alt="..."
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
              alt="..."
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
              alt="..."
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
          {i18next.t('7seven_luxury_hotel')}{' '}
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
            {i18next.t('7seven_luxury_hotel')}
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
                      {i18next.t('choose_hotel')}
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
                          {i18next.t('hotel_location')}
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
                          <span>{i18next.t('tagaytay')}</span>
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
                          <span>{i18next.t('boracay')}</span>
                        </div>
                        <div
                          className={
                            styles.navigation_row +
                            ' dropdown-item border-radius-md'
                          }
                          onClick={setRedirectElNido ? handleSubmitElNido : ''}
                        >
                          <span>{i18next.t('el_nido')}</span>
                        </div>
                      </div>
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
                      {i18next.t('services')}
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
                                  {i18next.t('rooms_general')}
                                </h6>
                                <span class="text-sm">
                                  {i18next.t('rooms_preference')}
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
                              {i18next.t('rooms_general_solo')}
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
                              {i18next.t('rooms_general_double')}
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
                              {i18next.t('rooms_general_deluxe')}
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
                              {i18next.t('rooms_general_premier')}
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
                                  {i18next.t('gathering_general')}
                                </h6>
                                <span class="text-sm">
                                  {i18next.t('gathering_event_plans')}
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
                                setRedirectGatheringWedding
                                  ? handleSubmitGatheringWedding
                                  : ''
                              }
                            >
                              {i18next.t('gathering_general_wedding')}
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
                              {i18next.t('gathering_general_corporate')}
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
                              {i18next.t('gathering_general_milestone')}
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
                      {i18next.t('library_general')}
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
                                {i18next.t('library_general_about')}
                              </h6>
                              <span class="text-sm">
                                {i18next.t('library_general_about_quote')}
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
                                {i18next.t('library_general_gallery')}
                              </h6>
                              <span class="text-sm">
                                {i18next.t('library_general_gallery_quote')}
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
                                {i18next.t('library_general_amenities')}
                              </h6>
                              <span class="text-sm">
                                {i18next.t('library_general_amenities_quote')}
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </ul>
                  </li>
                  <li class="nav-item dropdown dropdown-hover mx-2">
                    <FormGroup
                      className={styles.language_selector + ' bg-dark'}
                    >
                      <Input
                        className="bg-dark text-light"
                        type="select"
                        name="select"
                        id="exampleSelect1"
                        onChange={changeLanguage}
                        value={lang}
                      >
                        <option value={'en'} className="bg-dark text-light">
                          English
                        </option>
                        <option value={'ph'} className="bg-dark text-light">
                          Tagalog
                        </option>
                        <option value={'th'} className="bg-dark text-light">
                          ไทย
                        </option>
                      </Input>
                    </FormGroup>
                    {/* <nav className='container mb-4 mt-4'>
                      <div className='row'>
                        <div className='col-10'></div>
                        <div className='col-2'>
                          <select className='custom-select pull-right'>
                            <option value={"en"}>English</option>
                            <option value={"ph"}>Tagalog</option>
                            <option value={"th"}>Thai</option>
                          </select>
                        </div>
                      </div>
                    </nav> */}
                  </li>
                  <li class="nav-item my-auto ms-3 ms-lg-0">
                    <a
                      className={
                        styles.dropdown_cont +
                        ' btn btn-sm  bg-warning p-2 mb-0 me-1 mt-2 mt-md-0 text-white'
                      }
                      onClick={() => setLiveDemo(true)}
                    >
                      {i18next.t('signup')}
                    </a>

                    {/* Modal */}
                    <Modal isOpen={liveDemo} toggle={() => setLiveDemo(false)}>
                      <div className="modal-body">
                        <button
                          aria-label="Close"
                          className="close"
                          data-dismiss="modal"
                          type="button"
                          onClick={() => setLiveDemo(false)}
                        >
                          <span aria-hidden={true}>×</span>
                        </button>
                        <SignIn />
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
