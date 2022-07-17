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
import { Link } from 'react-router-dom';
import Landing from '../Landing/Landing';



function IndexNavbar() {

  // Redirection
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async () => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 3000))

    window.location = "/tagaytay"
  }

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
      {
        setIsLoading ? isLoading && (
          <>
            <Landing className="d-none">

            </Landing>
            <div className={styles.footer}>
              <div className={styles.wrapper}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.shadow}></div>
                <div className={styles.shadow}></div>
                <div className={styles.shadow}></div>
                <span>Loading</span>
              </div>
            </div>
          </>

        ) : ''

      }
      <Navbar className={classnames('fixed-top', navbarColor)} id="navbar_cont" expand="lg">
        <Link
          to="/"
          class="navbar-brand font-weight-bolder ms-sm-3 text-warning"
          rel="tooltip"
          data-placement="bottom"
          id="bottom"
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
        </Link>
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
                    <Link
                      to="/"
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
                    </Link>
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
                            setIsLoading ?
                              handleSubmit :
                              ''
                          }
                        >
                          <span>Tagaytay</span>
                        </div>
                        <Link
                          to="/boracay"
                          className={
                            styles.navigation_row +
                            ' dropdown-item border-radius-md'
                          }
                        >
                          <span>Boracay</span>
                        </Link>
                        <Link
                          to="/el-nido"
                          href="./pages/author.html"
                          className={
                            styles.navigation_row +
                            ' dropdown-item border-radius-md'
                          }
                        >
                          <span>El Nido</span>
                        </Link>
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
<<<<<<< Updated upstream
                  </div>
                </li>

                <li class="nav-item dropdown dropdown-hover mx-2">
                  <Link
                    to="/"
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
                    <img
                      src="./assets/img/down-arrow-white.svg"
                      alt="down-arrow"
                      class="arrow ms-auto ms-md-2"
                    />
                  </Link>
                  <ul
                    class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3"
                    aria-labelledby="dropdownMenuBlocks"
                  >
                    <div class="d-none d-lg-block">
                      <li class="nav-item dropdown dropdown-hover dropdown-subitem">
                        <Link
                          to="/"
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
                            <img
                              src="./assets/img/down-arrow-white.svg"
                              alt="down-arrow"
                              class="arrow ms-auto ms-md-2"
                            />
                          </div>
                        </Link>
                        <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                          <Link
                            to="services-rooms-solo"
                            className={
                              styles.navigation_row +
                              ' dropdown-item border-radius-md'
                            }
                          >
                            Solo
                          </Link>
                          <Link
                            to="services-rooms-double"
                            className={
                              styles.navigation_row +
                              ' dropdown-item border-radius-md'
                            }
                          >
                            Double
                          </Link>
                          <Link
                            to="services-rooms-delux"
                            className={
                              styles.navigation_row +
                              ' dropdown-item border-radius-md'
                            }
                          >
                            Deluxe
                          </Link>
                          <Link
                            to="services-rooms-premier"
                            className={
                              styles.navigation_row +
                              ' dropdown-item border-radius-md'
                            }
                          >
                            Premier
                          </Link>
                        </div>
                      </li>

                      <li class="nav-item dropdown dropdown-hover dropdown-subitem">
                        <Link
                          to="/"
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
                            <img
                              src="./assets/img/down-arrow-white.svg"
                              alt="down-arrow"
                              class="arrow ms-auto ms-md-2"
                            />
                          </div>
                        </Link>
                        <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                          <Link
                            to="services-gathering-wedding"
                            className={
                              styles.navigation_row +
                              ' dropdown-item border-radius-md'
                            }
                          >
                            Weddings
                          </Link>
                          <Link
                            to="services-gathering-corporate"
                            className={
                              styles.navigation_row +
                              ' dropdown-item border-radius-md'
                            }
                          >
                            Corporate
                          </Link>
                          <Link
                            to="services-gathering-milestone "
                            className={
                              styles.navigation_row +
                              ' dropdown-item border-radius-md'
                            }
                          >
                            Milestone
                          </Link>
                        </div>
                      </li>
=======
>>>>>>> Stashed changes
                    </div>
                  </li>

                  <li class="nav-item dropdown dropdown-hover mx-2">
                    <Link
                      to="/"
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
                    </Link>
                    <ul
                      class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3"
                      aria-labelledby="dropdownMenuBlocks"
                    >
                      <div class="d-none d-lg-block">
                        <li class="nav-item dropdown dropdown-hover dropdown-subitem">
                          <Link
                            to="/"
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
                          </Link>
                          <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                            <Link
                              to="wedding"
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                            >
                              Solo
                            </Link>
                            <Link
                              to="corporate"
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                            >
                              Double
                            </Link>
                            <Link
                              to="milestone"
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                            >
                              Deluxe
                            </Link>
                            <Link
                              to="milestone"
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                            >
                              Premier
                            </Link>
                          </div>
                        </li>

                        <li class="nav-item dropdown dropdown-hover dropdown-subitem">
                          <Link
                            to="/"
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
                          </Link>
                          <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                            <Link
                              to="wedding"
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                            >
                              Weddings
                            </Link>
                            <Link
                              to="corporate"
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                            >
                              Corporate
                            </Link>
                            <Link
                              to="milestone"
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                            >
                              Milestone
                            </Link>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </li>

                  <li class="nav-item dropdown dropdown-hover mx-2">
                    <Link
                      to="/"
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
                    </Link>
                    <ul
                      class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive mt-0 mt-lg-3 p-3 border-radius-lg"
                      aria-labelledby="dropdownMenuDocs"
                    >
                      <div class="d-none d-lg-block">
                        <ul class="list-group">
                          <li class="nav-item list-group-item border-0 p-0">
                            <Link
                              to="about"
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                            >
                              <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                About Us
                              </h6>
                              <span class="text-sm">
                                All about overview, quick start, license and
                                contents
                              </span>
                            </Link>
                          </li>
                          <li class="nav-item list-group-item border-0 p-0">
                            <Link
                              to="gallery"
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                            >
                              <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                Gallery
                              </h6>
                              <span class="text-sm">
                                See our colors, icons and typography
                              </span>
                            </Link>
                          </li>
                          <li class="nav-item list-group-item border-0 p-0">
                            <Link
                              to="amenities"
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                            >
                              <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                Amenities
                              </h6>
                              <span class="text-sm">
                                Explore our collection of fully designed
                                components
                              </span>
                            </Link>
                          </li>
                          <li class="nav-item list-group-item border-0 p-0">
                            <Link
                              to="corporate"
                              className={
                                styles.navigation_row +
                                ' dropdown-item border-radius-md'
                              }
                            >
                              <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                Contact Us
                              </h6>
                              <span class="text-sm">
                                Check how you can integrate our plugins
                              </span>
                            </Link>
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
                  <li class="nav-item ms-lg-auto">
                    <a
                      className={
                        styles.dropdown_cont + ' nav-link nav-link-icon me-2'
                      }
                      href="https://github.com/creativetimofficial/material-kit"
                      target="_blank"
                    >
                      <i class="fa fa-github me-1"></i>
                      <p
                        class="d-inline text-sm z-index-1 font-weight-bold"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Star us on Github"
                      >
                        Github
                      </p>
                    </a>
                  </li>
                  <li class="nav-item my-auto ms-3 ms-lg-0">
                    <a
                      className={
                        styles.dropdown_cont +
                        ' btn btn-sm  bg-gradient-warning  mb-0 me-1 mt-2 mt-md-0 text-white'
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
