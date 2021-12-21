import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPages from './pages/LoginPages';
import Header from './components/header/Header';
import SignupPage from './pages/SignupPage';
import React, { useEffect, useState } from 'react';
import SuccessAlert from './components/alert/SuccessAlert';
import authentication from './apis/Authentication';
import HomePages from './pages/HomePages';

function App() {
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authentication.checkLoggedIn().then((loggedIn) => {
      setIsLoggedIn(loggedIn);
    });
  }, []);

  const showSuccessMessage = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const login = async (username, password) => {
    const { statusCode, error } = await authentication.login(
      username,
      password
    );
    if (statusCode === 200) {
      setIsLoggedIn(true);
      return null;
    }

    if (statusCode === 400) {
      return error;
    }
    alert(error);
    return null;
  };

  const logout = () => {
    authentication.logout();
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {successMessage && <SuccessAlert message={successMessage} />}
      <Header isLoggedIn={isLoggedIn} logout={logout} />
      <Routes>
        <Route
          path="/"
          exact
          element={isLoggedIn ? <HomePages /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <LoginPages
                showSuccessMessage={showSuccessMessage}
                login={login}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/signup"
          element={
            !isLoggedIn ? (
              <SignupPage showSuccessMessage={showSuccessMessage} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
