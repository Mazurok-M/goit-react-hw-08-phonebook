import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { Wrap, Title, Box } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrap>
      <Title>Contacts</Title>
      <Box>
        <div>
          <Filter />
          <ContactList />
        </div>
        <ContactForm />
      </Box>
    </Wrap>
  );
};

export default Contacts;
