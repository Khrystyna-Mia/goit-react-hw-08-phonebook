import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'services/contactsApi';
import ContactElList from './ContactElList';
import s from './ContactList.module.css';

const ContactList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const filter = useSelector(state => state.filter);

  const normalizeFilter = filter.toLowerCase();
  const filteredContacts =
    contacts &&
    contacts.filter(({ name }) => name.toLowerCase().includes(normalizeFilter));

  return (
    <ul className={s.list}>
      {contacts &&
        filteredContacts.map(({ id, name, phone }) => (
          <li className={s.item} key={id}>
            <ContactElList id={id} name={name} number={phone} />
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
