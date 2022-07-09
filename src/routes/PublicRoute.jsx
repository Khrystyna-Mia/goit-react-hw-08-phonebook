import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import PropTypes from 'prop-types';

export const PublicRoute = ({ redirectPath = '/', children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectPath} replace /> : children;
};

PublicRoute.propTypes = {
  redirectPath: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
