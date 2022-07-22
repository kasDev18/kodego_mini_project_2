import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from './ModalComponent.module.css';

import Pdf from './files/CapacitiesChart.pdf';

export default class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div>
        <span role="button" onClick={this.toggle}>
          Package
        </span>
        <Modal isOpen={this.state.modal}>
          <form onSubmit={this.handleSubmit}>
            <ModalHeader>Milestone</ModalHeader>
            <ModalBody>
              <div className="row modal-lg">
                <div class="row">
                  <div class="col-sm-12 text-center">
                    <div class="row">
                      <div class="col-8 col-sm-6">
                        <img
                          className={styles.ModalImg}
                          src="https://img.tagvenue.com/resize/d8/33/widen-1680-noupsize;14525-the-london-gin-club-venue.jpg"
                          alt=""
                        />
                      </div>
                      <div class="col-4 col-sm-6 text-justify">
                        Life’s greatest moments deserve to be remembered. We
                        have plenty of space for you to celebrate, congratulate,
                        and commemorate at 7SEVEN LUXURY HOTEL.
                      </div>
                    </div>
                    <a
                      href={Pdf}
                      without
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span class="row btn btn-success text-center mt-4">
                        Floor Plans
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <span color="danger" role="button" onClick={this.toggle}>
                Close
              </span>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}
