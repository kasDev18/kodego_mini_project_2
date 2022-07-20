import React from 'react';
import styles from './Tagaytay_Rooms_Solo.module.css';
import { Link } from 'react-router-dom';
<<<<<<< Updated upstream
=======
import BookingForm from '../../../../components/BookingForm/BookingForm';
import RoomSoloModal from './Tagaytay_Rooms_Solo_Modal/Tagaytay_Rooms_Solo_Modal';

import {
  Row,
  Col,
  Input
} from "reactstrap";
>>>>>>> Stashed changes

class TagaytayRoomsSolo extends React.Component {
  render() {
    return (
      <>
        <div className={styles.HotelBoracay}>
          <div className={styles.containerImage}>
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/4e/0e/1c/premier-room--v10582220.jpg?w=1200&h=-1&s=1"
              autoPlay
              className={styles.ImageBoracay}
              alt="milestone"
            />
          </div>
        </div>
        {/* 
          Description Hotel
        */}
        <div className={styles.BoracayDescription}>
          <p className='p-5'>
            When you need a large venue for your business seminar or company
            banquet, the 7Seven Luxury Hotel is sure to impress. Invite up to
            144 guests, and we take care of the rest. The 7Seven Luxury Hotel
            can be divided into two distinctive suites – one for business
            presentations and the other for dining and discussions, or one for a
            brainstorm over breakfast followed by a productive training session
            in the other. A separate anteroom can also be used as a breakout
            room during meetings, a VIP room for events or an interview room.
            Whatever your agenda, the 7Seven Luxury Hotel at somewhere adapts to
            meet your requirements.
          </p>
        </div>

        {/* 
          Rooms
        */}
        <div className="container my-5 ">
          <div className="row my-5">
            <div className={styles.HotelPackage + ' col-6'}>
              <Link to=" ">
                <div align="center" class="fond">
                  <div
                    className={styles.carreaux_presentation_light}
                    style={{
                      backgroundImage: `url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/4e/0e/28/premier-room--v10582428.jpg?w=1200&h=-1&s=1")`,
                    }}
                  >
                    <div className={styles.shadow_swhow_mini}>
                      <div className={styles.deroul_titre}>TAGAYTAY</div>
                      <div class={styles.deroul_soustitre}>Book Now!</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.HotelPackage + ' col-6'}>
              <div className={styles.boraAddress}>
                <h1 className="mb-5">SOLO ROOM</h1>
                <p>
                  <strong>Floor area:</strong> 27 sqm
                </p>
                <p>
                  <strong>Bed Configuration:</strong> Available in twin or queen
                  bed configurations
                </p>
                <p>
                  The room features a queen-sized bed. It has a spacious balcony
                  and the most charming view of the Newcoast Beach and the
                  Boracay Keyhole.
                </p>
              </div>
            </div>
            <div className="text-center mt-5">
              <div>
                <Row className='d-flex justify-content-center mb-3'>
                  <Col className='col-3'>
                    <Input type="text" placeholder="     Check-in" />
                    <i className={styles.calendar_icon + ' fa-solid fa-calendar-days'}></i>
                  </Col>
                  <Col className='col-3'>
                    <Input type="text" placeholder="     Check-out" />
                    <i className={styles.calendar_icon + ' fa-solid fa-calendar-days'}></i>
                  </Col>
                </Row>
              </div>
              <RoomSoloModal />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TagaytayRoomsSolo;
