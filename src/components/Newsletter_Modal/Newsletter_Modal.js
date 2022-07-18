import React from 'react';
import styles from './Newsletter_Modal.module.css';
import {
  Button, FormGroup, Input, Modal, Row,
  Col,
} from "reactstrap";

function Newsletter_Modal() {
  const [loginModal, setLoginModal] = React.useState(false);

  const submit_btn = () => {
    window.location = '/';
  }

  return (
    <>
      <a
        className=" text-white bg-warning p-2 border rounded"
        onClick={() => setLoginModal(true)}
      >
        Login modal
      </a>
      <Modal
        isOpen={loginModal}
        toggle={() => setLoginModal(false)}
        modalClassName="modal-register"
      >
        <div className="modal-header no-border-header text-center">
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setLoginModal(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
          <div className='d-flex justify-content-center mx-5'>
            <img
              src="http://static.pinnula.fr/news/i/win7-yellow-logo.png"
              width="50px"
              height="50px"
              className="img-fluid border "
              alt="..."
            />
          </div>
          <h3 className="modal-title text-center">7Seven Luxury Hotel</h3>
          <p>Please provide the details</p>
        </div>
        <div className="modal-body">
          <Row>
            <Col>
              <label>First name</label>
              <Input type="text" placeholder="First name" />
            </Col>
            <Col>
              <label>Last name</label>
              <Input type="text" placeholder="Last name" />
            </Col>
          </Row>
          <FormGroup className='mt-1'>
            <label>Email</label>
            <Input defaultValue="" placeholder="Email" type="text" />
          </FormGroup>
          <div className="d-flex justify-content-center" >
            <Button className="btn" color='success' onClick={submit_btn}>
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Newsletter_Modal;
