import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const isExitName = contacts.some(
      prevContact => prevContact.name === contact.name
    );

    if (isExitName) {
      alert(`A contact with the name ${contact.name} already exists`);
      return;
    }

    const isExitNumber = contacts.some(
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
    setContacts([...contacts, newContact]);
  };

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        deleteContact={deleteContact}
      />
    </div>
  );
}
