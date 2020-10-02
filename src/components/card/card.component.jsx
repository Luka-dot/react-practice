import React from 'react';

import './card.styles.css';

export const Card = (props) => (

    <div className='card-container' >
        <img alt='contatc' src={`https://robohash.org/${props.singleContact.id}?set=set5&size=180x180`} />
        <h1>
            { props.singleContact.name }
        </h1>
    </div>
)