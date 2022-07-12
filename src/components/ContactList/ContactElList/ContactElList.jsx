import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'services/contactsApi';
import s from './ContactElList.module.css';

const ContactElList = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <div className={s.wrapper}>
      <p className={s.name}>{name}:</p>
      <span className={s.number}>{number}</span>

      <button
        className={s.button}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Dellete
      </button>
    </div>
  );
};

ContactElList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactElList;
