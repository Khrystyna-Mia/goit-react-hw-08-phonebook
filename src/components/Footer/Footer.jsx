import Container from 'components/Container';
import { GiSelfLove } from 'react-icons/gi';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.copyright}>
          <p className={s.copyrightText}>
            © 2022 | Developed
            <span className={s.icon}>
              <GiSelfLove size={30} fill="#2E151B" />
            </span>
            by Kristi
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
