import React, { Component } from 'react';
import styles from './NotFound.module.css';
export class NotFound extends Component {
  render() {
    return (
      <div>
        <div class="bg-dark">
          <div class="container">
            <section
              class={
                styles.sections +
                ' px-md-5 mx-md-5 text-center dark-grey-text mb-4'
              }
            >
              <img
                src="https://mdbootstrap.com/img/Others/404_mdb.png"
                alt="Error 404"
                class={styles.NotFound + ' img-fluid mb-4'}
              />

              <h3 class="text-warning font-weight-bold">
                Oops! This obviously isn't a page you were looking for.
              </h3>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
