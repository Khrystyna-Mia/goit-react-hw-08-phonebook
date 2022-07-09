import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import s from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
        <Button sx={{ display: 'block', my: 2 }} variant="text">
          <NavLink to="/" className={s.link}>
            Home
          </NavLink>
        </Button>

        {isLoggedIn && (
          <Button sx={{ display: 'block', my: 2 }} variant="text">
            <NavLink to="/contacts" className={s.link}>
              Contacts
            </NavLink>
          </Button>
        )}
      </Box>
    </>
  );
};

export default Navigation;
