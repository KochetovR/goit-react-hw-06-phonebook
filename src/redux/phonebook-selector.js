export const getContacts = state => state.phonebook.contacts;
export const getFilter = state => state.phonebook.filter;

export const getFilterContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  const normalizeFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
};
