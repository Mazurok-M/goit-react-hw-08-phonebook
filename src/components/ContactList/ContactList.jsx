// import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

import css from './contactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilterContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filterContacts = getFilterContacts();

  return (
    <div>
      {filterContacts.length > 0 && (
        <ul className={css.contacts}>
          {filterContacts.map(contact => (
            <li key={contact.id} className={css.contacts__item}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
