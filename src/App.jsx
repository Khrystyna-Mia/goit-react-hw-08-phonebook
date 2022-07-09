import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Routes, Route } from 'react-router-dom';

import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>

      <Footer />
    </Container>
  );
};

export default App;
