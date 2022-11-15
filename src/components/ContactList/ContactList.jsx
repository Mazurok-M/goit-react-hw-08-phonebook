import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/selectors';

import css from './contactList.module.css';

export const ContactList = () => {
  const filterContacts = useSelector(selectFilterContacts);

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
