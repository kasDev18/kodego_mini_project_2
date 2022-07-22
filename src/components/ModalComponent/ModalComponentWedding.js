import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from './ModalComponent.module.css';

import Pdf from './files/Wedding_PlanningGuide_2022New.pdf';

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
            <ModalHeader>Wedding</ModalHeader>
            <ModalBody>
              <div className="row modal-lg">
                <div class="row">
                  <div class="col-sm-12 text-center">
                    <div class="row">
                      <div class="col-8 col-sm-6">
                        <img
                          className={styles.ModalImg}
                          src="https://www.bellevueclubhotel.com/wp-content/uploads/2019/06/Weddings_detail_PlanningGuide.jpg"
                          alt=""
                        />
                      </div>
                      <div class="col-4 col-sm-6 text-justify">
                        Walk down the aisle at the most sought-after wedding
                        venue on the Eastside. From ceremony to celebration,
                        guest lists to wine lists, we guarantee your big day
                        will be one to remember.
                      </div>
                    </div>
                    <a
                      href={Pdf}
                      without
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span class="row btn btn-success text-center mt-4">
                        Wedding Plan Guide
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
