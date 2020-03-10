import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";
import ThemeContext from "../context/themeContext";

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func
  };
  static defaultProps = {
    onAddContact: () => {}
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
      <ThemeContext.Consumer>
        {theme => (
          <div
            style={{
              color: theme.fontColor,
              background: theme.bodyBg
            }}
          >
            <h1 className={styles.title}>Phonebook</h1>
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
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
