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
import React from 'react';
// nodejs library that concatenates stringsnpx generate-react-cli component About
import classnames from 'classnames';
import styles from './Nav.module.css';
// reactstrap components
import { Button, Collapse, Navbar, Container, Modal, UncontrolledTooltip } from 'reactstrap';
import { Link } from 'react-router-dom';

function IndexNavbar() {
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
    <Navbar className={classnames('fixed-top', navbarColor)} expand="lg">
      <Link
        to="/"
        class="navbar-brand font-weight-bolder ms-sm-3 text-warning"
        rel="tooltip"
        data-placement="bottom" id="bottom"
      >
        7Seven luxury hotel
        <UncontrolledTooltip placement="bottom" className='bg-light' target="bottom" delay={0}>
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
                  <a
                    className={
                      styles +
                      ' nav-link ps-2 d-flex cursor-pointer align-items-center'
                    }
                    id="dropdownMenuPages"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-hotel"></i>
                    Choose Your Hotel
                    <img
                      src="./assets/img/down-arrow-white.svg"
                      alt="down-arrow"
                      class="arrow ms-auto ms-md-2"
                    />
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-animation ms-n0 dropdown-md p-3 border-radius-xl mt-0 mt-lg-5"
                    aria-labelledby="dropdownMenuPages"
                  >
                    <div class="d-none d-lg-block ">
                      <h6
                        className={
                          styles +
                          ' dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1'
                        }
                      >
                        Hotel Location
                      </h6>
                      <a
                        href="./pages/about-us.html"
                        className={styles + ' dropdown-item border-radius-md'}
                      >
                        <span>Tagaytay</span>
                      </a>
                      <Link
                        to="/boracay"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Boracay</span>
                      </Link>
                      <a
                        href="./pages/author.html"
                        class="dropdown-item border-radius-md"
                      >
                        <span>El Nido</span>
                      </a>
                      {/* <h6 class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1 mt-3">
                        Account
                      </h6>
                      <a href="./pages/sign-in.html" class="dropdown-item border-radius-md">
                        <span>Sign In</span>
                      </a> */}
                    </div>

                    <div class="d-lg-none">
                      <h6 class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
                        Landing Pages
                      </h6>

                      <a
                        href="./pages/about-us.html"
                        class="dropdown-item border-radius-md"
                      >
                        <span>About Us</span>
                      </a>
                      <a
                        href="./pages/contact-us.html"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Contact Us</span>
                      </a>
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
                    </div>
                  </div>
                </li>

                <li class="nav-item dropdown dropdown-hover mx-2">
                  <a
                    class="nav-link ps-2 d-flex cursor-pointer align-items-center"
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
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3"
                    aria-labelledby="dropdownMenuBlocks"
                  >
                    <div class="d-none d-lg-block">
                      <li class="nav-item dropdown dropdown-hover dropdown-subitem">
                        <a
                          class="dropdown-item py-2 ps-3 border-radius-md"
                          href="./presentation.html"
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
                        </a>
                        <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                          <Link
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            to="products"
                          >
                            Single
                          </Link>
                          <a
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            href="./sections/page-sections/features.html"
                          >
                            Double
                          </a>
                          <a
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            href="./sections/page-sections/features.html"
                          >
                            Deluxe Single
                          </a>
                          <a
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            href="./sections/page-sections/features.html"
                          >
                            Deluxe Double
                          </a>
                        </div>
                      </li>

                      <li class="nav-item dropdown dropdown-hover dropdown-subitem">
                        <a
                          class="dropdown-item py-2 ps-3 border-radius-md"
                          href="./presentation.html"
                        >
                          <div class="w-100 d-flex align-items-center justify-content-between">
                            <div>
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
                        </a>
                        <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                          <a
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            href="./sections/navigation/navbars.html"
                          >
                            Weddings
                          </a>
                          <a
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            href="./sections/navigation/nav-tabs.html"
                          >
                            Corporate
                          </a>
                          <a
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            href="./sections/navigation/pagination.html"
                          >
                            Milestone
                          </a>
                        </div>
                      </li>
                    </div>
                  </ul>
                </li>

                <li class="nav-item dropdown dropdown-hover mx-2">
                  <a
                    class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                    id="dropdownMenuDocs"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-newspaper"></i>
                    Docs
                    <img
                      src="./assets/img/down-arrow-white.svg"
                      alt="down-arrow"
                      class="arrow ms-auto ms-md-2"
                    />
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive mt-0 mt-lg-3 p-3 border-radius-lg"
                    aria-labelledby="dropdownMenuDocs"
                  >
                    <div class="d-none d-lg-block">
                      <ul class="list-group">
                        <li class="nav-item list-group-item border-0 p-0">
                          <a
                            class="dropdown-item py-2 ps-3 border-radius-md"
                            href=" https://www.creative-tim.com/learning-lab/bootstrap/overview/material-kit "
                          >
                            <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              About Us
                            </h6>
                            <span class="text-sm">
                              All about overview, quick start, license and
                              contents
                            </span>
                          </a>
                        </li>
                        <li class="nav-item list-group-item border-0 p-0">
                          <a
                            class="dropdown-item py-2 ps-3 border-radius-md"
                            href=" https://www.creative-tim.com/learning-lab/bootstrap/colors/material-kit "
                          >
                            <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Gallery
                            </h6>
                            <span class="text-sm">
                              See our colors, icons and typography
                            </span>
                          </a>
                        </li>
                        <li class="nav-item list-group-item border-0 p-0">
                          <a
                            class="dropdown-item py-2 ps-3 border-radius-md"
                            href=" https://www.creative-tim.com/learning-lab/bootstrap/alerts/material-kit "
                          >
                            <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Amenities
                            </h6>
                            <span class="text-sm">
                              Explore our collection of fully designed
                              components
                            </span>
                          </a>
                        </li>
                        <li class="nav-item list-group-item border-0 p-0">
                          <a
                            class="dropdown-item py-2 ps-3 border-radius-md"
                            href=" https://www.creative-tim.com/learning-lab/bootstrap/datepicker/material-kit "
                          >
                            <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Contact Us
                            </h6>
                            <span class="text-sm">
                              Check how you can integrate our plugins
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="row d-lg-none">
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
                    </div>
                  </ul>
                </li>
                <li class="nav-item ms-lg-auto">
                  <a
                    class="nav-link nav-link-icon me-2"
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
                    class="btn btn-sm  bg-gradient-warning  mb-0 me-1 mt-2 mt-md-0 text-white"
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
  );
}

export default IndexNavbar;

