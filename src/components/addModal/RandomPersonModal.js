import React, { useState, useContext } from 'react';
import Modal from '../modal/Modal';
import CardContainerContext from '../../contexts/CardContainerContext';
import { RANDOM_PERSON_ADD } from '../../reducers/Reducer';
import { addRandomPerson} from '../../services/Service';

const RandomPersonModal = () => {
    const { dataDispatch, setDisplayRandomPerson } = useContext(CardContainerContext);


    const addRandom = async () => {
        const addRandomP = await addRandomPerson();
        dataDispatch({type: RANDOM_PERSON_ADD, addRandomP});
        close();
    };

    const close = () => setDisplayRandomPerson(false);

    return (
        <Modal title="Random Person" close={close}>
            <form>
                <button 
                    className="button-modal" 
                    type="button" 
                    onClick={addRandom}>
                    Add Random Person
                </button>
            </form>
        </Modal>
    );
}

export default RandomPersonModal;
