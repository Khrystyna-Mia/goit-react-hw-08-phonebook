import { useState } from 'react';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'services/contactsApi';
import { Notify } from 'notiflix';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setName(value);
    }

    if (name === 'number') {
      setNumber(value);
    }

    // switch (name) {
    //     case 'name':
    //         setName(value);
    //         break;

    //     case 'number':
    //         setNumber(value);
    //         break;

    //     default:
    //         return;
    // }
  };

  const checkRepeatName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const checkRepeatNumber = number => {
    return contacts.find(contact => contact.number === number);
  };

  const checkValidNumber = number => {
    return !/\d{3}[-]\d{2}[-]\d{2}/g.test(number);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (checkRepeatName(name)) {
      Notify.info(`🙄 This ${name} is already in contacts`);
    } else if (checkRepeatNumber(number)) {
      Notify.info(`🙄 This ${number} is already in contacts`);
    } else if (checkValidNumber(number)) {
      Notify.failure(`😔 Please, enter the correct number phone`);
    } else {
      addContact({ name, phone: number });
    }

    resetInput();
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>Name</label>
      <input
        className={s.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />

      <label className={s.label}>Number</label>
      <input
        className={s.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
