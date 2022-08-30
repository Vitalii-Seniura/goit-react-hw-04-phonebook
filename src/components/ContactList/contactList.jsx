import PropTypes from 'prop-types';
import css from './contactList.module.css';

const ContactList = ({ contacts, onLeaveFeedback }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={css.item}>
            {contact.name}: {contact.number}
            <button
              className={css.btn}
              type="button"
              onClick={() => onLeaveFeedback(contact.id)}
              id={contact.id}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.protoType = {
  onClick: PropTypes.func.isRequired,
};
