import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    const isExitName = this.state.contacts.some(
      prevContact => prevContact.name === contact.name
    );

    if (isExitName) {
      alert(`A contact with the name ${contact.name} already exists`);
      return;
    }

    const isExitNumber = this.state.contacts.some(
      prevContact => prevContact.number === contact.number
    );

    if (isExitNumber) {
      alert(`The phone number ${contact.number}  already exists`);
      return;
    }

    const newContact = {
      id: nanoid(),
      ...contact,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;

    const { addContact, changeFilter, getVisibleContacts, deleteContact } =
      this;

    const visibleContacts = getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
      </div>
    );
  }
}

export default App;
