import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/contacts-actions';
import s from './ContactFilter.module.css';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChangeFilter = e =>
    dispatch(filterContacts(e.currentTarget.value));

  return (
    <>
      <label className={s.label}>Find contacts by name</label>

      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      />
    </>
  );
};

export default ContactFilter;
