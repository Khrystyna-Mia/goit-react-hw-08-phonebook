import { HashLoader } from 'react-spinners/HashLoader';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <HashLoader size={30} color="#2e151b" />
    </div>
  );
};

export default Loader;
