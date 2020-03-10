import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";
import { uuid } from "uuidv4";
import ContactListButton from "../ContactListButton/ContactListButton";
import ThemeContext from "../context/themeContext";
import styles from "./ContactList.module.css";

export default function ContactList({ contacts, onRemove }) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div
          style={{
            color: theme.fontColor,
            background: theme.bodyBg
          }}
        >
          <h2 className={styles.title}>Contacts</h2>
          <ul>
            {contacts.map(contact => (
              <ContactListItem contact={contact} key={uuid()}>
                <ContactListButton
                  contact={contact}
                  onRemoveContact={() => onRemove(contact.id)}
                />
              </ContactListItem>
            ))}
          </ul>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

ContactList.defaultProps = {
  contacts: [],
  onRemove: () => {}
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onRemove: PropTypes.func
};
