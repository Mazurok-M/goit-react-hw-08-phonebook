import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/contacts/contacts-selectors';

import { Form, FormLabel, FormInput, Button } from './ContactForm.style';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contacts.some(contact => contact.name === name)) {
      alert(`A contact with the name ${name} already exists`);
      return;
    }
    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          placeholder="Enter number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
