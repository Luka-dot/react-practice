import React, { Component } from 'react';
import './App.css';

import CartList from './components/card-list/card-list.component'


class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: []
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
        <CartList name={this.state.contact} cardContacts={this.state.contacts}>
        
        </CartList>
      </div>
    );
  }
}

export default App;
