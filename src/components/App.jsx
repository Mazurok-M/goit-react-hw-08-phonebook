import { Route, Routes } from 'react-router-dom';
import Contacts from 'pages/Contacts/Contacts';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
// import {
//   selectError,
//   selectIsLoading,
// } from 'redux/contacts/contacts-selectors';
// import { fetchContacts } from 'redux/contacts/contacts-operations';

// import { fetchContacts } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/selectors';

// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </Container>
  );
};

// <div>
// <h1>Phonebook</h1>
// <ContactForm />
// <h2>Contacts</h2>
// <Filter />
// {isLoading && !error && <b> Loading...</b>}
// {error && <b>{error}</b>}
// <ContactList />
// </div>
