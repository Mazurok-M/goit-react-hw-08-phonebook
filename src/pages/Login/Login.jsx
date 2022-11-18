import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { authOperations } from 'redux/auth';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Сторінка логіна</h1>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;

/* <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Війти</button>
      </form> */
