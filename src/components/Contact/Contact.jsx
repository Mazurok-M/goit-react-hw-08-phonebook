import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { Button, Wrap, Name } from './Contact.styled';
import { deleteContact } from 'redux/contacts/contacts-operations';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <Wrap>
      <Name>
        <span>{contact.name}</span>:<span> {contact.number}</span>
      </Name>

      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Wrap>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
