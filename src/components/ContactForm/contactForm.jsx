import { nanoid } from 'nanoid';
import css from './contactForm.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
      id: nanoid(),
    });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
      id: '',
    });
  };

  render() {
    return (
      <div className={css.phonebook}>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <label htmlFor={this.idName} className={css.label}>
            Name
            <input
              className={css.input}
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              id={this.state.id}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="" className={css.label}>
            Number
            <input
              className={css.input}
              type="tel"
              value={this.state.number}
              onChange={this.handleChange}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
  number: PropTypes.number,
  id: PropTypes.string,
};
