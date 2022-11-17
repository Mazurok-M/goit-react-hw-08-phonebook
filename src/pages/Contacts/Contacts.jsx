import { Contact } from 'components/Contact/Contact';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/contacts/contacts-selectors';

import css from './Contacts.module.css';

const Contacts = () => {
  const filterContacts = useSelector(selectFilterContacts);
  console.log(filterContacts);

  return (
    <div>
      <h1>Сторінка контактів</h1>
      <ContactForm />
      <Filter />
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

export default Contacts;
