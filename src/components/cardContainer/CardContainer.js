import React, { useReducer, useEffect, useState } from 'react';
import './CardContainer.scss';
import { getData } from '../../services/Service';
import { reducer, GET_DATA } from '../../reducers/Reducer';
import CardContainerContext from '../../contexts/CardContainerContext';
import Card from '../card/Card';
import NewPersonModal from '../addModal/NewPersonModal';
import RandomPersonModal from '../addModal/RandomPersonModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const CardContainer = () => {
	const [data, dataDispatch] = useReducer(reducer, []);
	const [displayNewPerson, setDisplayNewPerson] = useState(false);
	const [displayRandomPerson, setDisplayRandomPerson] = useState(false);
	const [cardIndex, setCardIndex] = useState(0);

	const slider = Math.ceil(data.length / 10);

	useEffect(() => {
		const promise = getData();
		promise.then(data => dataDispatch({ type: GET_DATA, data : data }));
	}, []);

  	return (
		<CardContainerContext.Provider value={{ 
			data, 
			cardIndex,
			dataDispatch, 
			setDisplayNewPerson,
			setDisplayRandomPerson
			}}>
			<div className="buttons-open-modal-container">
				<button 
					className="button-open-modal" 
					type="button"
					onClick={() => setDisplayNewPerson(true)}>
					Add New Person
					<FontAwesomeIcon 
                        			icon={faUserPlus} 
                        			style={{ marginLeft: `5px` }} 
					/>
				</button>
				<button 
					className="button-open-modal" 
					type="button"
					onClick={() => setDisplayRandomPerson(true)}>
					Random Person
					<FontAwesomeIcon 
                        			icon={faUserPlus} 
                        			style={{ marginLeft: `5px` }} 
					/>
				</button>
			</div>
			<section className="card-container">
				<Card />
			</section>
			<section className="buttons-slider-container">
				<button 
					className="buttons-slider"
					type="button" 
					disabled={`${cardIndex === 0 ? 'disabled': ''}`} 
					onClick={() => setCardIndex(cardIndex - 1)}>
					<FontAwesomeIcon 
                        			icon={faChevronLeft} 
                        			style={{ marginRight: `5px` }} 
					/>
				</button>
				<button 
					className="buttons-slider"
					type="button" 
					disabled={`${cardIndex === slider - 1 ? 'disabled': ''}`} 
					onClick={() => setCardIndex(cardIndex + 1)}>
					<FontAwesomeIcon 
                        			icon={faChevronRight} 
                        			style={{ marginLeft: `5px` }} 
					/>
				</button>
			</section>
			{ displayNewPerson ? <NewPersonModal /> : null }
			{ displayRandomPerson ? <RandomPersonModal /> : null }
		</CardContainerContext.Provider> 
  	);
}

export default CardContainer;
