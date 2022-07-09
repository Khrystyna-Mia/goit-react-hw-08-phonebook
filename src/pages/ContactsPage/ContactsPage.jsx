import ContactForm from 'components/ContactForm';
import ContactFilter from 'components/ContactFilter';
import ContactList from 'components/ContactList';
import s from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={s.title}>Contacts</h2>
      <ContactFilter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
