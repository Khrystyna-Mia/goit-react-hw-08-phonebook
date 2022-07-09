import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexGrow: 1,
          justifyContent: 'flex-end',
        }}
      >
        <Button
          sx={{ display: 'block', marginRight: 1, my: 2, color: '#2E151B' }}
          variant="text"
          // href="#text-buttons"
        >
          <NavLink to="/register" className={s.link}>
            Sign up
          </NavLink>
        </Button>

        <Button
          sx={{ display: 'block', marginRight: 1, my: 2, color: '#2E151B' }}
          variant="text"
          // href="#text-buttons"
        >
          <NavLink to="/login" className={s.link}>
            Log in
          </NavLink>
        </Button>
      </Box>
    </>
  );
};

export default AuthNav;
