import React, { Component } from 'react';
import './App.css';

import CartList from './components/card-list/card-list.component'


class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      searchFiels: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ contacts: users }))
  }

  render() {
    return (
      <div className="App">
        <input type='search' placeholder='Search contacts' onChange={e => this.setState({ searchFiels: e.target.value })} />
        <CartList name={this.state.contact} cardContacts={this.state.contacts}>
        
        </CartList>
      </div>
    );
  }
}

export default App;
