import React, { Component } from 'react';
import './App.css';

import CartList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      searchField: ''
    };

  //  this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ contacts: users }))
  }

  handleSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { contacts, searchField } = this.state;

    const filteredContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    
    return (
      <div className="App">
        <h1>Rolodex</h1>
        <SearchBox placeholder='Search contacts' handleChange={this.handleSearchChange} />
        <CartList name={filteredContacts} cardContacts={filteredContacts}>
        
        </CartList>
      </div>
    );
  }
}

export default App;
