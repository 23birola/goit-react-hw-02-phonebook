import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export default class App extends Component {

  state = {
    contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const id = uuidv4();
    this.setState((prevState) => ({ contacts: [...prevState.contacts, {id, name, number}] 
    }))
  }

  handleChange = (e) => {
    const filterName = e.target.value.toLowerCase();
    console.log(filterName);
    this.setState({ filter: filterName });
    this.handleFilter();
  }

  handleFilter = () => {
    if (!this.state.filter) { return }
    else {
      return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter));
    }
  }

  render() {
    const selectedContacts = this.handleFilter();

    return (
      <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.onSubmit}/>
        
      <h2>Contacts</h2>
      <Filter filterByName={this.handleChange}/>
        {!this.state.filter && <ContactList contacts={this.state.contacts} />}
        {this.state.filter && <ContactList contacts={selectedContacts}/>}
      </div>
    )}
}
