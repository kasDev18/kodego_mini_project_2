import React, { useState } from 'react'
import styles from './Tagaytay_Rooms_Solo_Modal.module.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

// react-date-range component
import { DateRange } from 'react-date-range';

// reactstrap components
import {
    Button,
    FormGroup,
    Input,
    Modal,
    Row,
    Col
} from "reactstrap";

function RoomSoloModal() {
    const [liveDemo, setLiveDemo] = useState(false);

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0
    });

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }
    return (
        <>
            <div className='border border-1 rounded mb-4 border-warning container bg-dark pt-4'>
                <Row className='d-flex justify-content-center mb-4'>
                    <Col className='d-flex justify-content-end'>
                        <Input type="text" placeholder="Check-in" className={styles.booking_date_input + ' '} value={`${format(date[0].startDate, "MM/dd/yyyy")}` + '  ' + '-' + '  ' + `${format(date[0].endDate, "MM/dd/yyyy")}`} />
                        <i className={styles.calendar_icon + ' fa-solid fa-calendar-days'}></i>
                    </Col>
                    <Col className='d-flex justify-content-center '>
                        <Input onClick={() => setOpenOptions(!openOptions)} type="text" placeholder="List of Person" className={styles.family_member_input + ' '} value={`    ${options.adult} adult | ${options.children} children`} />
                        <i className={styles.family_member_icon + ' fa-solid fa-people-group'}></i>
                        {
                            openOptions &&
                            <div className={styles.family_member_option + ' position-absolute bg-light border border-1 rounded'}>
                                <div className={styles.option_item + ' border border-1 d-flex justify-content-center pt-2'}>
                                    <span className={styles.option_text + ' mx-5'}>Adult</span>
                                    <button className={styles.option_counter_btn + ' btn bg-danger text-light'} onClick={() => handleOption("adult", "d")} disabled={options.adult <= 1}>-</button>
                                    <span className={styles.option_counter_number}>{options.adult}</span>
                                    <Button className={styles.option_counter_btn + ' btn bg-success te-light'} onClick={() => handleOption("adult", "i")}>+</Button>
                                </div>
                                <div className={styles.option_item + ' border border-1 d-flex justify-content-center'}>
                                    <span className={styles.option_text}>Children</span>
                                    <div className={styles.children_counter}>
                                        <Button className={styles.option_counter_btn + ' btn bg-danger text-light'} onClick={() => handleOption("children", "d")} disabled={options.children <= 0}>-</Button>
                                        <span className={styles.option_counter_number}>{options.children}</span>
                                        <Button className={styles.option_counter_btn + ' btn bg-success text-light'} onClick={() => handleOption("children", "i")}>+</Button>
                                    </div>
                                </div>
                            </div>
                        }
                    </Col>
                    <Col className='d-flex'>
                        <Input type="text" placeholder="Total" className={styles.booking_date_input + ' '} />
                        <i className={styles.price_icon + ' fa-solid fa-peso-sign'}></i>
                    </Col>
                </Row>
            </div>
            <Button className={styles.modal_btn_booking + ' '} outline color="warning" type="button" onClick={() => setLiveDemo(true)}>
                Book Now!
            </Button>
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
                <div className="modal-body d-flex justify-content-center">
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="border border-1 shadow"
                    />
                </div>
                <div className="modal-footer d-flex justify-content-center">
                    <Button className={styles.modal_btn_save + ' '} data-dismiss="modal" outline color="success" type="button" onClick={() => setLiveDemo(false)}>
                        Save
                    </Button>
                </div>
            </Modal>
        </>
    );
}

export default RoomSoloModal;