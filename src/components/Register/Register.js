import React from 'react';
import styles from './Register.module.css';
export class Register extends React.Component {
  render() {
    return (
      <div>
        <section class={styles.registerPage + ''}>
          <div class="px-4 py-5 px-md-5 text-center text-lg-start">
            <div class="container">
              <div class="row gx-lg-5 align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0">
                  <h1 class="my-5 display- fw-bold ls-tight">
                    7SEVEN LUXURY HOTEL <br />
                    <span class="text-primary">your urban oasis awaits</span>
                  </h1>
                  <p style={{ color: 'gray' }}>
                    While here, guests enjoy all the perks of being a member:
                    Take a dip in the pool, join a cycling class or get pampered
                    at our spa. Our guests live like locals with shopping,
                    restaurants and other cultural venues just a town car ride
                    away.
                  </p>
                </div>

                <div class="col-lg-6 mb-5 mb-lg-0">
                  <div class="card">
                    <div class="card-body py-5 px-md-5">
                      <form>
                        <div class="row">
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              <input
                                type="text"
                                id="form3Example1"
                                class="form-control"
                              />
                              <label class="form-label" for="form3Example1">
                                First name
                              </label>
                            </div>
                          </div>
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              <input
                                type="text"
                                id="form3Example2"
                                class="form-control"
                              />
                              <label class="form-label" for="form3Example2">
                                Last name
                              </label>
                            </div>
                          </div>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="form3Example3"
                            class="form-control"
                          />
                          <label class="form-label" for="form3Example3">
                            Email address
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="form3Example4"
                            class="form-control"
                          />
                          <label class="form-label" for="form3Example4">
                            Password
                          </label>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-4">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example33"
                            checked
                          />
                          <label class="form-check-label" for="form2Example33">
                            Subscribe to our newsletter
                          </label>
                        </div>
                        <button
                          type="submit"
                          class="btn btn-primary btn-block mb-4"
                        >
                          Sign up
                        </button>
                        <div class="text-center">
                          <p>or sign up with:</p>
                          <button
                            type="button"
                            class="btn btn-link btn-floating mx-1"
                          >
                            <i class="fab fa-facebook-f"></i>
                          </button>

                          <button
                            type="button"
                            class="btn btn-link btn-floating mx-1"
                          >
                            <i class="fab fa-google"></i>
                          </button>

                          <button
                            type="button"
                            class="btn btn-link btn-floating mx-1"
                          >
                            <i class="fab fa-twitter"></i>
                          </button>

                          <button
                            type="button"
                            class="btn btn-link btn-floating mx-1"
                          >
                            <i class="fab fa-github"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Register;
