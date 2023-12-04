import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleCreateContact = e => {
    e.preventDefaul();
    console.dir('e.target :>> ', e.target);

    // this.setState({
    //   name,
    //   number,
    // });
  };

  handleChange = ({ target: { value } }) => {
    console.log('value :>> ', value);
    this.setState({
      name: value,
    });
  };

  render() {
    return (
      <>
        <form className={css.form} onSubmit={this.handleCreateContact}>
          <label className={css.formLabel}>
            <span className={css.labelText}>Name</span>
            <input
              className={css.formInput}
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              required
            />
          </label>
          <label className={css.formLabel}>
            <span className={css.labelText}>Number</span>
            <input
              className={css.formInput}
              type="tel"
              name="number"
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
