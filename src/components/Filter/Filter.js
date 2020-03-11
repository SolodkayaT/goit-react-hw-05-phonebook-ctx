import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

export default function Filter({ value, onChangeFilter }) {
  return (
    <input
      className={styles.filter}
      type="text"
      value={value}
      onChange={e => onChangeFilter(e.target.value)}
    ></input>
  );
}

Filter.defaultProps = {
  value: ""
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func
};
