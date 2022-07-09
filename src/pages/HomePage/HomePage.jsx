import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <h1 className={s.title}>Welcome to PHONEBOOK 😊</h1>

      <p className={s.text}>
        Please,
        <span className={s.span}> SIGN UP </span> or
        <span className={s.span}> LOG IN </span>
        in to have access
      </p>
    </>
  );
};

export default HomePage;
