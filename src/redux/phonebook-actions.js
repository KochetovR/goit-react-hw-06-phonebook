import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('phonebook/add', ({ name, number }) => {
  return {
    payload: {
      name,
      number,
      id: uuidv4(),
    },
  };
});

const deleteContact = createAction('phonebook/delete');
const filterContacts = createAction('phonebook/changeFilter');

const actions = {
  addContact,
  deleteContact,
  filterContacts,
};

export default actions;
