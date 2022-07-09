import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  style: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.style}>
        <Avatar className={classes.avatar}></Avatar>

        <Typography component="h1" variant="h5" color="secondary">
          Hello, who's this?
        </Typography>

        <form
          onSubmit={handleSubmit}
          className={classes.form}
          autoComplete="off"
        >
          <TextField
            label="Email Address"
            required
            fullWidth
            variant="standard"
            margin="normal"
            color="secondary"
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            autoComplete="email"
            autoFocus
          />

          <TextField
            label="Password"
            required
            fullWidth
            variant="standard"
            margin="normal"
            color="secondary"
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="outlined"
            size="medium"
            color="secondary"
            className={classes.submit}
          >
            Log in
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;
