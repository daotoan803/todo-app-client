import { Routes, Route } from 'react-router-dom';
import LoginPages from './pages/LoginPages';
import Header from './components/header/Header';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" exact element={<LoginPages />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
