import React from 'react';

import { Card } from '../card/card.component';
import './card.styles.css';

export const CardList = (props) => (

    <div className='card-list'>
        {
          props.cardContacts.map(contact => (
            <Card key={contact.id} singleContact={contact} />
            ))
        }
    </div>
);

export default CardList;