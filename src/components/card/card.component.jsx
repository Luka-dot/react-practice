import React from 'react';

import './card.styles.css';

export const Card = (props) => (

    <div className='card-container' >
        <img alt='contatc' src={`https://robohash.org/${props.singleContact.id}?set=set5&size=180x180`} />
        <h2>
            { props.singleContact.name }
        </h2>
        <h4>
            { props.singleContact.email }
        </h4>
    </div>
)