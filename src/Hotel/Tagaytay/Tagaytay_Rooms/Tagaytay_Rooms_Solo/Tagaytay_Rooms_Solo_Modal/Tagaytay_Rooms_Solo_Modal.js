import React from 'react'

// reactstrap components
import { Button, FormGroup, Input, Modal } from "reactstrap";

function RoomSoloModal() {
    const [liveDemo, setLiveDemo] = React.useState(false);
    return (
        <>
            <Button outline color="info" type="button" onClick={() => setLiveDemo(true)}>
                Launch demo modal
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
                <div className="modal-body">

                </div>
                <div className="modal-footer">

                </div>
            </Modal>
        </>
    );
}

export default RoomSoloModal;