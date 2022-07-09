import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import avt from '../../images/avt.jpg';
import Button from '@material-ui/core/Button';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);
  const avatar = avt;

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="50" className={s.avatar} />
      <span className={s.rext}>Welcome, {email}</span>
      <Button
        type="button"
        variant="text"
        color="secondary"
        size="large"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
