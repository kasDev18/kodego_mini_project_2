import React from 'react';
import styles from './Inclusion.module.css';
import concierge from './InclusionImages/24-hour-concierge.png'
import continental_breakfast from './InclusionImages/CONTINENTAL-BREAKFAST-AVAILABLE.png'
import dine_in_room from './InclusionImages/dine-in-room.png'
import down_pillows from './InclusionImages/DOWN-PILLOWS-.png'
import laundry from './InclusionImages/dry-cleaning-laundry-service.png'
import feather from './InclusionImages/feather-duvet.png'
import free_wifi from './InclusionImages/FREE-WIFI.png'
import hair_dryer from './InclusionImages/hair-dryer.png'
import in_room from './InclusionImages/IN-ROOM-SAFE.png'
import sheets from './InclusionImages/INDIAN-COTTON-SHEETS.png'
import smoking from './InclusionImages/non-smoking.png'
import tv from './InclusionImages/PREMIUM-TV-CHANNELS.png'
import bars from './InclusionImages/private-bars.png'
import towncar from './InclusionImages/TOWNCAR-SERVICE.png'
import turndown from './InclusionImages/TURNDOWN-SERVICE.png'
import parking from './InclusionImages/VALET-PARKING.png'
import temp from './InclusionImages/in-room-tempruature-control.png'

class Inclusion extends React.Component {

  render() {
    return (
      <>
        <div className={styles + '  d-flex justify-content-center pt-5'}>
          <div>
            <div className={styles + ' mx-5 border border-2 rounded'}>
              <img src={concierge} width={"100px"} height={"100px"} alt="..." />
            </div>
            <div>
              <h6 className="d-flex justify-content-center px-5 pt-2 text-light">24-HOUR</h6>
              <h6 className="d-flex justify-content-center px-5 text-light">Concierge</h6>
            </div>
          </div>
          <div>
            <div className={styles + ' mx-5 border border-2 rounded'}>
              <img src={continental_breakfast} width={"100px"} height={"100px"} alt="..." />
            </div>
            <div>
              <h6 className="d-flex justify-content-center px-5 pt-2 text-light">CONTINENTAL</h6>
              <h6 className="d-flex justify-content-center px-5 text-light">BREAKFAST </h6>
              <h6 className="d-flex justify-content-center px-5 text-light">AVAILABLE </h6>
            </div>
          </div>
          <div>
            <div className={styles + ' mx-5 border border-2 rounded'}>
              <img src={dine_in_room} width={"100px"} height={"100px"} alt="..." />
            </div>
            <div>
              <h6 className="d-flex justify-content-center px-5 pt-2 text-light">IN-ROOM</h6>
              <h6 className="d-flex justify-content-center px-5 text-light">DINING</h6>
            </div>
          </div>
          <div>
            <div className={styles + ' mx-5 border border-2 rounded'}>
              <img src={down_pillows} width={"100px"} height={"100px"} alt="..." />
            </div>
            <div>
              <h6 className="d-flex justify-content-center px-5 pt-2 text-light">DOWN</h6>
              <h6 className="d-flex justify-content-center px-5 text-light">PILLOWS</h6>
            </div>
          </div>
          <div>
            <div className={styles + ' mx-5 border border-2 rounded'}>
              <img src={laundry} width={"100px"} height={"100px"} alt="..." />
            </div>
            <div>
              <h6 className="d-flex justify-content-center px-5 pt-2 text-light">DRY</h6>
              <h6 className="d-flex justify-content-center px-5 text-light">CLEANING</h6>
            </div>
          </div>
        </div>
        <div className={styles + '  d-flex justify-content-center pt-5'}>
          <div>
            <div className={styles + ' mx-5 border border-2 rounded'}>
              <img src={feather} width={"100px"} height={"100px"} alt="..." />
            </div>
            <div>
              <h6 className="d-flex justify-content-center px-5 pt-2 text-light">FEATHER </h6>
              <h6 className="d-flex justify-content-center px-5 text-light">DUVETS</h6>
            </div>
          </div>
          <div>
            <div className={styles + ' mx-5 border border-2 rounded d-flex justify-content-center'}>
              <img src={free_wifi} width={"100px"} height={"100px"} alt="..." />
            </div>
            <div>
              <h6 className="d-flex justify-content-center px-5 pt-2 text-light">COMPLIMENTARY </h6>
              <h6 className="d-flex justify-content-center px-5 text-light">WIFI</h6>
            </div>
          </div>
          <div>
            <div className={styles + ' mx-5 border border-2 rounded'}>
              <img src={hair_dryer} width={"100px"} height={"100px"} alt="..." />
            </div>
            <div>
              <h6 className="d-flex justify-content-center px-5 pt-2 text-light">HAIR </h6>
              <h6 className="d-flex justify-content-center px-5 text-light">DRYER</h6>
            </div>
          </div>
          <div>
            <div className={styles + ' mx-5 border border-2 rounded'}>
              <img src={in_room} width={"100px"} height={"100px"} alt="..." />
            </div>
            <div>
              <h6 className="d-flex justify-content-center px-5 pt-2 text-light">IN-ROOM</h6>
              <h6 className="d-flex justify-content-center px-5 text-light">SAFE</h6>
            </div>
          </div>
          <div>
            <div className={styles + ' mx-5 border border-2 rounded'}>
              <img src={sheets} width={"100px"} height={"100px"} alt="..." />
            </div>
            <div>
              <h6 className="d-flex justify-content-center px-5 pt-2 text-light">INDIAN </h6>
              <h6 className="d-flex justify-content-center px-5 text-light">COTTON</h6>
              <h6 className="d-flex justify-content-center px-5 text-light">SHEETS</h6>
            </div>
          </div>
        </div>
        <div className={styles + '  d-flex justify-content-center pt-5'}>
          <div>
            <div className={styles + ' mx-5 border border-2 rounded'}>
              <img src={smoking} width={"100px"} height={"100px"} alt="..." />
            </div>
            <div>
              <h6 className="d-flex justify-content-center px-5 pt-2 text-light">SMOKE</h6>
              <h6 className="d-flex justify-content-center px-5 text-light">FREE</h6>
            </div>
          </div>
          <div>
            <div className={styles + ' mx-5 border border-2 rounded'}>
              <img src={tv} width={"100px"} height={"100px"} alt="..." />
            </div>
            <div>
              <h6 className="d-flex justify-content-center px-5 pt-2 text-light">PREMIUM TV</h6>
              <h6 className="d-flex justify-content-center px-5 text-light">CHANNELS</h6>
            </div>
          </div>
          <div>
            <div className={styles + ' mx-5 border border-2 rounded'}>
              <img src={bars} width={"100px"} height={"100px"} alt="..." />
            </div>
            <div>
              <h6 className="d-flex justify-content-center px-5 pt-2 text-light">PRIVATE</h6>
              <h6 className="d-flex justify-content-center px-5 text-light">BARS</h6>
            </div>
          </div>
          <div>
            <div className={styles + ' mx-5 border border-2 rounded'}>
              <img src={towncar} width={"100px"} height={"100px"} alt="..." />
            </div>
            <div>
              <h6 className="d-flex justify-content-center px-5 pt-2 text-light">TOWN CAR</h6>
              <h6 className="d-flex justify-content-center px-5 text-light">SERVICE</h6>
            </div>
          </div>
          <div>
            <div className={styles + ' mx-5 border border-2 rounded'}>
              <img src={turndown} width={"100px"} height={"100px"} alt="..." />
            </div>
            <div>
              <h6 className="d-flex justify-content-center px-5 pt-2 text-light">TURNDOWN</h6>
              <h6 className="d-flex justify-content-center px-5 text-light">SERVICE</h6>
            </div>
          </div>
        </div>
        <div className={styles + '  d-flex justify-content-center pt-5'}>
          <div>
            <div className={styles + ' mx-5 border border-2 rounded'}>
              <img src={parking} width={"100px"} height={"100px"} alt="..." />
            </div>
            <div>
              <h6 className="d-flex justify-content-center px-5 pt-2 text-light">VALET</h6>
              <h6 className="d-flex justify-content-center px-5 text-light">PARKING</h6>
            </div>
          </div>
          <div>
            <div className={styles + ' mx-5 border border-2 rounded'}>
              <img src={temp} width={"100px"} height={"100px"} alt="..." />
            </div>
            <div>
              <h6 className="d-flex justify-content-center px-5 pt-2 text-light">SMART</h6>
              <h6 className="d-flex justify-content-center px-5 text-light">THERMOSTAT</h6>
              <h6 className="d-flex justify-content-center px-5 text-light">CLIMATE</h6>
              <h6 className="d-flex justify-content-center px-5 text-light">CONTROL</h6>
            </div>
          </div>
        </div>
      </>

    )
  }
}



export default Inclusion;
