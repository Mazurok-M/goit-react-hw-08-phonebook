import PropTypes from 'prop-types';
import css from './contactList.module.css';

const ContactList = ({ contacts, deleteContact }) => (
  <ul className={css.contacts}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.contacts__item}>
        <span className={css.name}>{name}</span>:
        <span className={css.number}> {number}</span>
        <button
          className={css.btn__delete}
          type="button"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
