import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func
  };

  state = {
    name: "",
    phone: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  hanleSubmit = e => {
    e.preventDefault();
    const { name, phone } = this.state;
    this.props.onAddContact(name, phone);
    this.setState({ name: "", phone: "" });
  };

  render() {
    const { name, phone } = this.state;
    return (
      <>
        <h1 className={styles.title}>Phonebook</h1>{" "}
        <form className={styles.form} onSubmit={this.hanleSubmit}>
          <label className={styles.formLabel}>
            Name
            <input
              className={styles.formInput}
              type="text"
              value={name}
              placeholder="Enter name"
              onChange={this.handleChange}
              name="name"
              required
            ></input>
          </label>
          <label className={styles.formLabel}>
            Phone
            <input
              className={styles.formInput}
              type="text"
              value={phone}
              placeholder="Enter phone"
              onChange={this.handleChange}
              name="phone"
              required
            ></input>
          </label>
          <button className={styles.formButton} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}
