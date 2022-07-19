import React from 'react';
import PropTypes from 'prop-types';
import styles from './LanguageSelector.module.css';
import ph_flag from './Flag_Images/ph.svg'
import us_flag from './Flag_Images/us.svg'
import th_flag from './Flag_Images/th.svg'

class LanguageSelector extends React.Component {
  flag_images = [
    { src: ph_flag, language: 'Tagalog' },
    { src: us_flag, language: 'English' },
    { src: th_flag, language: 'Thai' }
  ]
  flags_array = [];

  CreateLanguageSelector() {
    this.flags_array = this.flag_images.map((element) => (
      <div class="d-none d-lg-block">
        <a
          className={styles.navigation_row + ' dropdown-item'}
          href="#"
        >
          <img
            src={element.src}
            width={'20px'}
            height={'20px'}
          />{' '}
          {element.language}
        </a>
      </div>
    )
    )
  }

  render() {
    this.CreateLanguageSelector()
    return (
      <>
        <a
          href="#"
          className={
            styles.language_selector_dropdown +
            ' text-light btn bg-gradient-dark dropdown-toggle p-2 px-2'
          }
          data-bs-toggle="dropdown"
          id="navbarDropdownMenuLink2"
        >
          <img src="https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/icons/flags/US.png" />{' '}
          Language
        </a>
        <div
          className={
            styles.dropdown_cont +
            ' dropdown-menu ms-n0 dropdown-md p-3 border-radius-xl mt-0 mt-lg-5'
          }
          aria-labelledby="dropdownMenuPages"
        >
          {this.flags_array}
        </div>
      </>
    )
  }

}

export default LanguageSelector;
