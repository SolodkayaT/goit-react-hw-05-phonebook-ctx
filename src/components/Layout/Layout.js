import React, { Component } from "react";
import ThemeContext from "../context/themeContext";
import Header from "../Header/Header";
import withTheme from "../hoc/withTheme";
import styles from "./Layout.module.css";

class Layout extends Component {
  render() {
    return (
      <>
        <ThemeContext.Consumer>
          {theme => (
            <div
              className={styles.body}
              style={{ color: theme.fontColor, background: theme.bodyBg }}
            >
              {this.props.toggle && (
                <Header onToggleTheme={e => this.props.toggle(e)} />
              )}
              {this.props.children}
            </div>
          )}
        </ThemeContext.Consumer>
      </>
    );
  }
}

export default withTheme(Layout);
