import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ redirectTo }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
};

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
};
