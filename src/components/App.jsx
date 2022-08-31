import { GlobalStyle } from './GlobalStyle';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/contactForm';
import ContactList from './ContactList/contactList';
import PropTypes from 'prop-types';
import Filter from './Filter/filter';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addContactList = data => {
    const searchName = data.name.toLowerCase();
    contacts.find(contact => contact.name.toLowerCase() === searchName)
      ? alert('contact is already in contacts')
      : setContacts(state => [...state, data]);
  };

  const handleDelete = contId => {
    setContacts(state => state.filter(({ id }) => id !== contId));
  };

  const handleFindChange = evt => {
    setFilter(evt.target.value);
  };

  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContactList} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFindChange} />
      <ContactList contacts={filterContact} onLeaveFeedback={handleDelete} />
      <GlobalStyle />
    </div>
  );
};

App.propTypes = {
  state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
