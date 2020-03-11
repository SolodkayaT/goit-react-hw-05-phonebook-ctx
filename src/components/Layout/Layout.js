import React from "react";
import ThemeContext from "../context/themeContext";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div
          className={styles.body}
          style={{
            color: theme.fontColor,
            background: theme.bodyBg
          }}
        >
          {children}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Layout;
