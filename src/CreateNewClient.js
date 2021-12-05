import React, {useState} from "react";
import {Modal, ModalBody, ModalHeader, ModalFooter, Button} from 'reactstrap';

export default function CreateNewClient(props) {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal)
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newAddress, setNewAddress] = useState('')
    const saveButtonHandler = () =>{
        props.createNewClient(newName, newAddress, newPhone);
        toggle();
        setNewName('')
        setNewPhone('')
        setNewAddress('')
    }

    return (
        <div>
            <Button Button color="danger" onClick={toggle}>create new client</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Modal title
                </ModalHeader>
                <ModalBody>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Name:</span>
                        <input
                            value={newName}
                            onChange={(e)=>setNewName(e.target.value)}
                            type="text" className="form-control" placeholder="Username" aria-label="Username"
                               aria-describedby="addon-wrapping"/>
                    </div>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Phone:</span>
                        <input
                            value={newPhone}
                            onChange={(e) => setNewPhone(e.target.value)}
                            type="text" className="form-control" placeholder="Phone number" aria-label="Username"
                               aria-describedby="addon-wrapping"/>
                    </div>

                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Address:</span>
                        <input
                            value={newAddress}
                            onChange={(e) => setNewAddress(e.target.value)}
                            type="text" className="form-control" placeholder="Address" aria-label="Username"
                               aria-describedby="addon-wrapping"/>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary"
                            onClick={saveButtonHandler}>Save</Button>{' '}
                    <Button color="Secondary" onClick="toggle">Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
