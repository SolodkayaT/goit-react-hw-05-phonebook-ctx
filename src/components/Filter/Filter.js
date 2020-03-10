import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <input
        className={styles.filter}
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      ></input>
    </div>
  );
}

Filter.defaultProps = {
  value: "",
  onChangeFilter: () => {}
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func
};
