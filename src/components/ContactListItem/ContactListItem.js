import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactListItem.module.css";

export default function ContactListItem({ contact, keys, children }) {
  return (
    <li className={styles.contactItem} key={keys}>
      <p>
        {contact.name} : {contact.phone}
      </p>
      {children}
    </li>
  );
}

ContactListItem.defaultProps = {
  contact: {},
  keys: ""
};

ContactListItem.propTypes = {
  contact: PropTypes.object,
  keys: PropTypes.string
};
