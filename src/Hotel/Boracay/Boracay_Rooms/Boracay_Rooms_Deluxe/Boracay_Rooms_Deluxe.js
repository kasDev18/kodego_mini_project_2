import React from 'react';
import styles from './Boracay_Rooms_Deluxe.module.css';
import { Link } from 'react-router-dom';
import RoomSoloModal from '../../../Tagaytay/Tagaytay_Rooms/Tagaytay_Rooms_Solo/Tagaytay_Rooms_Solo_Modal/Tagaytay_Rooms_Solo_Modal';

class BoracayRoomsDeluxe extends React.Component {
  render() {
    return (
      <>
        <div className={styles.HotelBoracay}>
          <div className={styles.containerImage}>
            <img
              src="https://belmonthotelboracay.com/Resources/images/BelmontHotelBoracay-ExecutiveRoomBanner-1920w.jpg"
              autoPlay
              className={styles.ImageBoracay}
              alt="milestone"
            />
          </div>
        </div>
        {/* 
          Description Hotel
        */}
        <div className={styles.BoracayDescription + ' container'}>
          <p>
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
        <div className={styles.booking_cont + ' my-5'}>
          <div className="row my-5">
            <div className={styles.HotelPackage + ' col-6'}>
              <Link to=" ">
                <div align="center" class="fond">
                  <div
                    className={styles.carreaux_presentation_light}
                    style={{
                      backgroundImage: `url("https://belmonthotelboracay.com/Resources/images/premier-01.jpg")`,
                    }}
                  >
                    <div className={styles.shadow_swhow_mini}>
                      <div className={styles.deroul_titre}>BORACAY</div>
                      <div class={styles.deroul_soustitre}>Book Now!</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.HotelPackage + ' col-6'}>
              <div className={styles.boraAddress}>
                <h1 className="mb-5">DELUXE ROOM</h1>
                <p>
                  <strong>Floor area:</strong> 27 sqm
                </p>
                <p>
                  <strong>Bed Configuration:</strong> Available in twin or queen
                  bed configurations
                </p>
                <p>
                  Our Deluxe Room features a premium amenities. It’s ideal for
                  couples who want to take their vacation up a notch.
                </p>
              </div>
            </div>
            <div className="text-center mt-5">
              <div>
                <RoomSoloModal />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BoracayRoomsDeluxe;
