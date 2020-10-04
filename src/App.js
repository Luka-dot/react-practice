import React, { Component } from 'react';
import './App.css';

import CartList from './components/card-list/card-list.component'


class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ contacts: users }))
  }

  render() {
    const { contacts, searchField } = this.state;

    const filteredContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )

    return (
      <div className="App">
        <input type='search' placeholder='Search contacts' onChange={e => this.setState({ searchField: e.target.value })} />
        <CartList name={filteredContacts} cardContacts={this.state.contacts}>
        
        </CartList>
      </div>
    );
  }
}

export default App;
