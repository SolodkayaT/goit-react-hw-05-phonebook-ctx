import React from "react";
import styles from "./Header.module.css";
import PropTypes from "prop-types";

const Header = ({ onToggleTheme }) => {
  return (
    <>
      <span className={styles.label}>Theme</span>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={styles.checked}
          onChange={e => onToggleTheme(e.target.value)}
        />
        <span className={styles.slider}></span>
      </label>
    </>
  );
};
export default Header;

Header.propTypes = {
  onToggleTheme: PropTypes.func
};
