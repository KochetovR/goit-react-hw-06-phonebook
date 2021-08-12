import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import phonebookActions from '../../redux/phonebook-actions';
import { getFilterContacts } from '../../redux/phonebook-selector';

import styles from './ContactItem.module.css';

const ContactItem = () => {
  const contacts = useSelector(getFilterContacts);

  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(phonebookActions.deleteContact(id));

  return (
    <>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={styles.contact__item}>
          <p>
            {name}: <span>{number}</span>
          </p>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={styles.contact__button}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

export default ContactItem;
