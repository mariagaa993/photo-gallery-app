import React, { Fragment, useContext, useEffect, useState } from 'react';
import CardContainerContext from '../../contexts/CardContainerContext';

const Card = () => {
    const { data, cardIndex } = useContext(CardContainerContext);
    const [pixels, setPixels] = useState(0);
    
    useEffect(() => {
        setPixels(-1200 * cardIndex);
    }, [cardIndex]);

    return (
        <Fragment>
            {
                data.slice(0).reverse().map(person => {
                    return (
                        <div className="card-person" style={{transform: `translateX(${pixels}px)`}}>
                            <figure key={person.id}>
                                <img  
                                    className="figure-img" 
                                    src={person.avatar} 
                                    alt={person.fullname} 
                                />
                                <figcaption>
                                    <h3 className="figcaption-title">{person.fullname}</h3>
                                    <p className="figcaption-p"><strong>Country:</strong> {person.country}</p>
                                    <p className="figcaption-p"><strong>Phone:</strong> {person.phone}</p>
                                </figcaption>
                            </figure> 
                        </div>                       
                    );
                })
            }
        </Fragment>    
    );
}

export default Card;
