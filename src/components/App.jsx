import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Contacts from 'pages/Contacts/Contacts';
// import Home from 'pages/Home/Home';
// import Login from 'pages/Login/Login';
// import Register from 'pages/Register/Register';
// import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
// import { useState } from 'react';
import Layout from './Layout/Layout';
import NotFound from 'pages/NotFound/NotFound';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(authSelectors.getIsFetchingCurrent);

  console.log(isFetchingCurrent);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrent ? (
        <h1>Loading</h1>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route element={<PublicRoute />}>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="contacts" element={<Contacts />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </Container>
  );
};
