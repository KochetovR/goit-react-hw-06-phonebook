import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import phonebookActions from './phonebook-actions';

const contacts = createReducer([], {
  [phonebookActions.addContact]: (state, { payload }) => {
    const nameContact = state.map(el => el.name.toLowerCase());
    if (nameContact.includes(payload.name.toLowerCase())) {
      alert(`${payload.name} is already in contacts`);
      return state;
    }

    return [...state, payload];
  },

  [phonebookActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [phonebookActions.filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
