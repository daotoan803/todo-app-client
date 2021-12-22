import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LabelInput from './../components/form/LabelInput';
import FlyIn from '../components/transition/FlyIn';

const LoginPages = ({ login, showSuccessMessage }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const error = await login(username, password);
    if (!error) {
      showSuccessMessage('Login success !');
      navigate('/');
      return;
    }

    setLoginError(true);
  };

  const onUsernameChange = (e) => {
    setUsername(e.target.value.trim());
    setLoginError(false);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value.trim());
    setLoginError(false);
  };

  return (
    <FlyIn>
      <div className="container mt-4">
        <form onSubmit={submit}>
          <div className="mb-3">
            <LabelInput
              label="Username"
              type="text"
              required={true}
              value={username}
              onChange={onUsernameChange}
              placeholder="Username"
            />
          </div>
          <div className="mb-3">
            <LabelInput
              label="Password"
              type="password"
              required={true}
              value={password}
              onChange={onPasswordChange}
              placeholder="Password"
            />
          </div>
          <p className="text-danger h6" hidden={!loginError}>
            Incorrect username or password
          </p>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </FlyIn>
  );
};

export default LoginPages;
