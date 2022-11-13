import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div>
      <span className={css.name}>{contact.name}</span>:
      <span className={css.number}> {contact.number}</span>
      <button className={css.btn__delete} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
