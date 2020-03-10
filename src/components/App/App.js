import React, { Component } from "react";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import ThemeContext from "../context/themeContext";
import { themeConfig } from "../context/themeContext";
import Filter from "../Filter/Filter";
import Header from "../Header/Header";
import styles from "./App.module.css";
import { uuid } from "uuidv4";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      filter: "",
      theme: "light"
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme(newTheme) {
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark"
    });
  }
  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");
    console.log(persistedContacts);
    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts)
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  changeFilter = filter => {
    this.setState({ filter });
  };

  addContact = (name, phone) => {
    const { contacts } = this.state;
    const isExist = contacts.some(contact => contact.name === name);
    if (isExist) {
      alert(`${name} is already in cntacts!`);
      return;
    }
    const contact = { id: uuid(), name, phone };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  getFiltredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getFiltredContacts();
    return (
      <ThemeContext.Provider value={themeConfig[this.state.theme]}>
        <section className={styles.section}>
          {this.state.theme && <Header onToggleTheme={this.toggleTheme} />}
          {ContactForm && <ContactForm onAddContact={this.addContact} />}
          {contacts.length > 1 && (
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          )}
          {visibleContacts.length > 0 && (
            <ContactList
              contacts={visibleContacts}
              onRemove={this.removeContact}
            />
          )}
        </section>
      </ThemeContext.Provider>
    );
  }
}
