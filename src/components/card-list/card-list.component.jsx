import React from 'react';

import './card.styles.css';

export const CardList = (props) => {

    return(
    <div className='card-list'>
        {
          props.contacts.map(contact => <h1 key={contact.id}>{contact.name}</h1>)
        }
    </div>
    )
};

export default CardList;