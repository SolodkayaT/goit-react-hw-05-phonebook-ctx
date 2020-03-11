import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";
import { uuid } from "uuidv4";
import ContactListButton from "../ContactListButton/ContactListButton";
import styles from "./ContactList.module.css";

export default function ContactList({ contacts, onRemove }) {
  return (
    <>
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
    </>
  );
}

ContactList.defaultProps = {
  contacts: []
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onRemove: PropTypes.func
};
