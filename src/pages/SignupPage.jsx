import React, { useState, useRef } from 'react';
import LabelInput from '../components/form/LabelInput';
import { useNavigate } from 'react-router-dom';

const SignupPage = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState({
    username: false,
    password: false,
    repeatPassword: false,
  });

  const navigate = useNavigate();

  const clearError = () => {
    setErrors({
      username: false,
      password: false,
      repeatPassword: false,
    });
    setSubmitError('');
  };

  const submit = async (e) => {
    e.preventDefault();

    let err = false;
    if (username.trim().length < 6 || username.trim().length > 20) {
      setErrors((prev) => ({
        ...prev,
        username: true,
      }));
      err = true;
    }
    if (password.trim().length < 6 || password.trim().length > 20) {
      setErrors((prev) => ({
        ...prev,
        password: true,
      }));
      err = true;
    }
    if (password !== repeatPassword) {
      setErrors((prev) => ({
        ...prev,
        password: true,
        repeatPassword: true,
      }));
      err = true;
    }
    if (err) return;

    signup();
  };

  const signup = async () => {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.status === 200) {
      setUsername('');
      setPassword('');
      setRepeatPassword('');
      navigate('/login');
      return;
    }

    const data = await response.json();
    setSubmitError(data.error);
  };

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
    clearError();
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    clearError();
  };
  const onRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
    clearError();
  };

  return (
    <div className="container mt-4">
      <form onSubmit={submit}>
        <div className="mb-3">
          <LabelInput
            label="Username"
            type="text"
            required={true}
            value={username}
            error={errors.username}
            onChange={onUsernameChange}
            placeholder="Username"
          />
          <div className={`form-text ${errors.username ? 'text-danger' : ''}`}>
            Username must be 6-20 characters long
          </div>
        </div>
        <div className="mb-3">
          <LabelInput
            label="Password"
            type="password"
            required={true}
            value={password}
            error={errors.password}
            onChange={onPasswordChange}
            placeholder="Password"
          />
          <div className={`form-text ${errors.password ? 'text-danger' : ''}`}>
            Password must be 6-20 characters long
          </div>
        </div>
        <div className="mb-3">
          <LabelInput
            label="Repeat Password"
            type="password"
            required={true}
            value={repeatPassword}
            error={errors.repeatPassword}
            onChange={onRepeatPasswordChange}
            placeholder="repeatPassword"
          />
          <div
            className="form-text text-danger"
            hidden={!errors.repeatPassword}>
            repeat password not match
          </div>
        </div>
        <div className="text-danger h5">{submitError}</div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
