import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPages from './pages/LoginPages';
import Header from './components/header/Header';
import SignupPage from './pages/SignupPage';
import React, { useEffect, useState } from 'react';
import SuccessAlert from './components/alert/SuccessAlert';
import authentication from './apis/Authentication';
import HomePages from './pages/HomePages';
import DangerAlert from './components/alert/DangerAlert';

function App() {
  const [successMessage, setSuccessMessage] = useState('');
  const [dangerMessage, setDangerMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authentication.checkLoggedIn().then((loggedIn) => {
      setIsLoggedIn(loggedIn);
    });
  }, []);

  const showSuccessMessage = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 2000);
  };

  const showDangerMessage = (message) => {
    setDangerMessage(message);
    setTimeout(() => setDangerMessage(''), 2000);
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
    <div className="App pb-5">
      {successMessage && <SuccessAlert message={successMessage} />}
      {dangerMessage && <DangerAlert message={dangerMessage} />}
      <Header isLoggedIn={isLoggedIn} logout={logout} />
      <main className="container">
        <Routes>
          <Route
            path="/"
            exact
            element={
              isLoggedIn ? (
                <HomePages
                  showSuccessMessage={showSuccessMessage}
                  showDangerMessage={showDangerMessage}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
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
      </main>
    </div>
  );
}

export default App;
