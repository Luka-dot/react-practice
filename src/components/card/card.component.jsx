import React from 'react';

import './card.styles.css';

export const Card = (props) => (

    <div className='clrd-container' >
        <h1>
            {
                props.singleContact.name
            }
        </h1>
    </div>
)