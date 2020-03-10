import React, { Component } from "react";
import ThemeContext from "../context/themeContext";
import styles from "./Header.module.css";

export default class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <div
            className={styles.themeSelector}
            style={{
              color: theme.fontColor,
              background: theme.bodyBg
            }}
          >
            <span className={styles.label}>Theme</span>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={styles.checked}
                onChange={event =>
                  this.props.onToggleTheme(event.currentTarget.value)
                }
              />
              <span className={styles.slider}></span>
            </label>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
