import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';

import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';

/* Статичні імпорти */
// import HomePage from 'pages/HomePage';
// import RegisterPage from 'pages/RegisterPage';
// import LoginPage from 'pages/LoginPage';
// import ContactsPage from 'pages/ContactsPage';

/* Динамічні імпорти */
const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */)
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */)
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */)
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */)
);

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Show React Skeleton</h1>
      ) : (
        <>
          <Header />

          <Suspense fallback={<p>Download...</p>}>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />

              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectPath={'/login'}>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />

              <Route
                path="/register"
                element={
                  <PublicRoute redirectPath={'/contacts'}>
                    <RegisterPage />
                  </PublicRoute>
                }
              />

              <Route
                path="/login"
                element={
                  <PublicRoute redirectPath={'/contacts'}>
                    <LoginPage />
                  </PublicRoute>
                }
              />

              <Route path="*" element={<Navigate to="/register" />} />
            </Routes>
          </Suspense>

          <Footer />
        </>
      )}
    </Container>
  );
};

export default App;
