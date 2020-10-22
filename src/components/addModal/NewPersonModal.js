import React, { useState, useContext } from 'react';
import Modal from '../modal/Modal';
import CardContainerContext from '../../contexts/CardContainerContext';
import { PERSON_ADD } from '../../reducers/Reducer';
import { addPerson } from '../../services/Service';

const NewPersonModal = () => {
    const { dataDispatch, setDisplayNewPerson } = useContext(CardContainerContext);
    const [newFullname, setNewFullname] = useState('');
    const [newAvatar, setNewAvatar] = useState();
    const [newCountry, setNewCountry] = useState('');
    const [newPhone, setNewPhone] = useState();

    const fullname = event => setNewFullname(event.target.value);
    const avatar = event => setNewAvatar(event.target.value);
    const country = event => setNewCountry(event.target.value);
    const phone = event => setNewPhone(event.target.value);

    const addNewPerson = async () => {
        const addP = await addPerson(newFullname, newAvatar, newCountry, newPhone);
        dataDispatch({type: PERSON_ADD, addP});
        close();
    };

    const close = () => setDisplayNewPerson(false);

    return (
        <Modal title="New User" close={close}>
            <form>
                <label>Full name</label>
                    <input type="text" onChange={fullname}  placeholder="Your full name" />
                <label>Country</label>
                    <input type="text" onChange={country}  placeholder="Country" />
                <label>Phone number</label>
                    <input type="tel" onChange={phone} placeholder="57-5841 156" />
                <label>Avatar</label>
                    <input type="url" onChange={avatar} placeholder="Your url image" />
                <button 
                    className="button-modal" 
                    type="button" 
                    onClick={addNewPerson}>
                    Add New User
                </button>
            </form>
        </Modal>
    );
}

export default NewPersonModal;
