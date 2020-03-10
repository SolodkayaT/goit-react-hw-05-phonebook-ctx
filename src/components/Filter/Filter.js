import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import ThemeContext from "../context/themeContext";

export default function Filter({ value, onChangeFilter }) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div
          style={{
            color: theme.fontColor,
            background: theme.bodyBg
          }}
        >
          <input
            className={styles.filter}
            type="text"
            value={value}
            onChange={e => onChangeFilter(e.target.value)}
          ></input>
        </div>
      )}
    </ThemeContext.Consumer>
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
