import React, { Component } from 'react';
import './App.css';

import CartList from './components/card-list/card-list.component'
import SearchBox from './components/search-box';

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
        <SearchBox placeholder='Search contacts' handleChange={e => this.setState({ searchField: e.target.value })} />
        <CartList name={filteredContacts} cardContacts={filteredContacts}>
        
        </CartList>
      </div>
    );
  }
}

export default App;
